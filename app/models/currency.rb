require 'dotenv'
Dotenv.load
class Currency < ApplicationRecord
    def current_price
        url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol='
        p ENV['API_KEY']
        headers = {'X-CMC_PRO_API_KEY' => ENV['API_KEY']}
        request = HTTParty.get(url + self.slug)
        response = JSON.parse(request.body)
    end
end

# 