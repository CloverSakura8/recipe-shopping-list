import React, { useState, useMemo } from 'react'
import { Box, Checkbox, Heading, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Recipe, Ingredient } from '../types/types'

interface ShoppingListProps {
  recipes: Recipe[]
}

type ConsolidatedIngredient = Ingredient & {
  checked: boolean
}

const ShoppingList = ({ recipes }: ShoppingListProps) => {
  const consolidatedIngredients = useMemo(() => {
    const ingredientMap = new Map<string, ConsolidatedIngredient>()
    
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        const key = `${ingredient.item}-${ingredient.unit}-${ingredient.category}`
        if (ingredientMap.has(key)) {
          const existing = ingredientMap.get(key)!
          ingredientMap.set(key, {
            ...existing,
            amount: existing.amount + ingredient.amount
          })
        } else {
          ingredientMap.set(key, { ...ingredient, checked: false })
        }
      })
    })

    return Array.from(ingredientMap.values())
  }, [recipes])

  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set())

  const categorizedIngredients = useMemo(() => {
    const categories = new Map<string, ConsolidatedIngredient[]>()
    consolidatedIngredients.forEach(ingredient => {
      if (!categories.has(ingredient.category)) {
        categories.set(ingredient.category, [])
      }
      categories.get(ingredient.category)!.push(ingredient)
    })
    return categories
  }, [consolidatedIngredients])

  const handleCheck = (ingredient: ConsolidatedIngredient) => {
    const key = `${ingredient.item}-${ingredient.unit}-${ingredient.category}`
    const newChecked = new Set(checkedIngredients)
    if (newChecked.has(key)) {
      newChecked.delete(key)
    } else {
      newChecked.add(key)
    }
    setCheckedIngredients(newChecked)
  }

  return (
    <Box w="full" p={6} borderWidth="1px" borderRadius="lg">
      <Heading size="lg" mb={6}>Shopping List</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {Array.from(categorizedIngredients.entries()).map(([category, ingredients]) => (
          <Box key={category}>
            <Heading size="md" mb={4}>{category}</Heading>
            <VStack align="stretch" spacing={3}>
              {ingredients.map((ingredient) => {
                const key = `${ingredient.item}-${ingredient.unit}-${ingredient.category}`
                return (
                  <Checkbox
                    key={key}
                    isChecked={checkedIngredients.has(key)}
                    onChange={() => handleCheck(ingredient)}
                  >
                    <Text>
                      {ingredient.item} ({ingredient.amount} {ingredient.unit})
                    </Text>
                  </Checkbox>
                )
              })}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ShoppingList 