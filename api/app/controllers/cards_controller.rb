class CardsController < ApplicationController
  before_action :set_card, only: %i[ show update destroy ]

  def index
    @cards = Card.all

    render json: @cards
  end

  def show
    render json: @card
  end

  def create
    @card = Card.new(card_params)

    if @card.save
      render json: @card, status: :created, location: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @card.destroy!
  end

  private
    def set_card
      @card = Card.find(params.expect(:id))
    end

    def card_params
      params.expect(card: [ :description, :limit, :user_id ])
    end
end
