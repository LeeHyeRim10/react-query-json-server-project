import React from 'react'
import ProductTable from '../../components/sales/ProductTable'
import { getCurrentUser } from '../../store/hooks/useUser'
import AuthControl from '../../components/layout/AuthControl';

const ProductPage = () => {

  const user = getCurrentUser();
  if(!user){
    return(
      <AuthControl message="로그인 후 상품 정보 접근 가능"/>
    )
  }

  return (
    <div>
      <ProductTable/>
    </div>
  )
}

export default ProductPage
