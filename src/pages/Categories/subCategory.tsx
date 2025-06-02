import Categories from '@/components/categories-components/Categories'
import PageTitle from '@/components/CommonComponents/PageTitle'
import { useState } from 'react'

const SubCategoriesPage = () => {

  const [openCategories, setOpenCategories] = useState(false)

  const handleCategories = () => {
    setOpenCategories(!openCategories)
  }

  return (
    <>
      <PageTitle title='Categories' button='Categories'   openCategories={handleCategories}/>
      <Categories openCategories={openCategories} handleCategories={handleCategories}/>
    </>
  )
}

export default SubCategoriesPage