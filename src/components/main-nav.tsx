import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  setCurrentPage: (page: string) => void;
}

export function MainNav({ className, setCurrentPage, ...props }: MainNavProps) {
  const [activePage, setActivePage] = useState("dashboard");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setActivePage(page);
  };

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {["dashboard", "incomes", "expenses", "categories"].map((page) => (
        <button
          key={page}
          onClick={() => handleNavigation(page)}
          className={cn(
            "text-sm font-medium transition-colors",
            activePage === page ? "text-primary" : "text-muted-foreground hover:text-primary"
          )}
        >
          {page === "dashboard" ? "Dashboard" : 
           page === "incomes" ? "Receitas" : 
           page === "expenses" ? "Despesas" : "Categorias"}
        </button>
      ))}
    </nav>
  );
}
