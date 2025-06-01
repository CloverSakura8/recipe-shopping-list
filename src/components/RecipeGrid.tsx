import React from 'react'
import { Box, Grid, Heading, VStack } from '@chakra-ui/react'
import { Recipe, RecipeCollection } from '../types/types'
import RecipeCard from './RecipeCard'

interface RecipeGridProps {
  recipes: RecipeCollection
  selectedRecipes: Recipe[]
  onRecipeSelect: (recipe: Recipe) => void
}

const RecipeGrid = ({ recipes, selectedRecipes, onRecipeSelect }: RecipeGridProps) => {
  return (
    <VStack w="full" spacing={8} align="stretch">
      {Object.entries(recipes).map(([category, categoryRecipes]) => (
        <Box key={category}>
          <Heading size="lg" mb={4} textTransform="capitalize">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </Heading>
          <Grid
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gap={6}
          >
            {categoryRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isSelected={selectedRecipes.some(r => r.id === recipe.id)}
                onSelect={() => onRecipeSelect(recipe)}
              />
            ))}
          </Grid>
        </Box>
      ))}
    </VStack>
  )
}

export default RecipeGrid 