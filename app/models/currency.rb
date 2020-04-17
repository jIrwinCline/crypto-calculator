require 'dotenv'
Dotenv.load
class Currency < ApplicationRecord
    def calculate_value(amount)
        (current_price.to_f * amount.to_f).round(4)
    end

    def current_price
        url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol='
        p self.slug
        headers = {'X-CMC_PRO_API_KEY' => ENV['API_KEY']}
        request = HTTParty.get(url + self.currency_symbol, :headers => headers)
        response = JSON.parse(request.body)
    end
end

