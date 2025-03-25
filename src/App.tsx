import React, { useState } from "react";

import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

import Dashboard from './pages/dashboard'
import Categories from './pages/categoriespage'
import Incomes from './app/incomes/page'
import Expenses from './app/expenses/page'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "expenses":
        return <Expenses />;
      case "incomes":
        return <Incomes />;
      case "categories":
        return <Categories />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
        <div className="md:hidden">
          <img
            src="/examples/dashboard-light.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="block dark:hidden"
          />
          <img
            src="/examples/dashboard-dark.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="hidden dark:block"
          />
        </div>
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <MainNav setCurrentPage={setCurrentPage} className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <UserNav />
              </div>
            </div>
          </div>

          <main>{renderPage()}</main>
        </div>
    </>
  )
}