class MainService
    def initialize
    end

    def call
        file_path = 'app/services/transactions.csv'

        CSV.foreach(file_path, headers: true, col_sep: ',') do |row|
            category = Category.create_or_find_by(description: row['Categoria'])

            puts "data: #{row['Data']}, titulo: #{row['Título']}, categoria: #{}, valor: #{row['Valor']}}"
        end
    end
end