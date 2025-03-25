import {
  Avatar,
  AvatarFallback
} from "@/components/ui/avatar"

const transactions = [
  { title: "Assai Atacadista", category: "Alimentação", value: "R$ 160,78"  },
  { title: "Smart Fit", category: "Saúde", value: "R$ 139,90"  },
  { title: "Posto de Gasolina", category: "Transporte", value: "R$ 70,58"  },
  { title: "Spotify", category: "Serviços", value: "R$ 21,90"  },
  { title: "Pet Shop Fino Faro", category: "Pets", value: "R$ 80"  }
];

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      {
        transactions.map((transaction, index) => (
          <div className="flex items-center" key={index}>
            <Avatar className="h-9 w-9">
              <AvatarFallback>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg></AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{transaction.title}</p>
              <p className="text-sm text-muted-foreground">{transaction.category}</p>
            </div>
            <div className="ml-auto font-medium">{transaction.value}</div>
          </div>
        ))
      }
    </div>
  )
}