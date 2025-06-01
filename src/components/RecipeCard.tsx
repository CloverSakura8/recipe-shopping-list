import React from 'react'
import { Box, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { Recipe } from '../types/types'

interface RecipeCardProps {
  recipe: Recipe
  isSelected: boolean
  onSelect: () => void
}

const RecipeCard = ({ recipe, isSelected, onSelect }: RecipeCardProps) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const selectedBorderColor = useColorModeValue('blue.500', 'blue.300')
  const bgColor = useColorModeValue('white', 'gray.800')
  const selectedBgColor = useColorModeValue('blue.50', 'blue.900')

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      onClick={onSelect}
      borderColor={isSelected ? selectedBorderColor : borderColor}
      bg={isSelected ? selectedBgColor : bgColor}
      transition="all 0.2s"
      _hover={{
        transform: 'scale(1.02)',
        shadow: 'lg',
      }}
    >
      <Image
        src={recipe.image}
        alt={recipe.name}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      <VStack p={4} align="stretch" spacing={2}>
        <Text fontWeight="bold" fontSize="lg">
          {recipe.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {recipe.ingredients.length} ingredients
        </Text>
      </VStack>
    </Box>
  )
}

export default RecipeCard 