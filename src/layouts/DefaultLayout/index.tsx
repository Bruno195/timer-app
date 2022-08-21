import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import React from 'react'

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

export { DefaultLayout }
