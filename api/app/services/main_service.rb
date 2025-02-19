class MainService
    def initialize
    end

    def call
        file_path = 'app/services/transactions.csv'

        PaymentMethod.create!(description: "Débito") if PaymentMethod.first.nil? 

        CSV.foreach(file_path, headers: true, col_sep: ',') do |row|
            next if row['Categoria'] == "renda"

            valor = row['Valor']
            valor_formatado = valor.gsub(/[^0-9.,]/, '')
            valor_formatado = valor_formatado.gsub(',', '').gsub('.', ',')
            
            category = Category.find_by(description: row['Categoria'])
            category = Category.create!(description: row['Categoria'], color: SecureRandom.hex(3)) if category.nil?

            Expense.create!(title: row['Título'], value: valor_formatado, date: row['Data'].gsub(/\D/, ''), payment_method_id: 1, category_id: category.id)

            # puts "#{row['Título']} - #{valor_formatado} - #{row['Categoria']}"
        end
    end
end