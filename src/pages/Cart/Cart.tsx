import {
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  TrashIcon
} from '@phosphor-icons/react';
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions
} from './Cart.styles';
import { Link } from 'react-router-dom';

import { coffees } from '../../assets/coffees/coffees';
import { QuantityInput } from '../../components/QuantityInput/QuantityInput';
import { Radio } from './Form/Radio/Radio';
import { TextInput } from './Form/TextInput/TextInput';
import { Fragment, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Cart() {
  const { cart, incrementItemQuantity, decrementItemQuantity, removeItem } =
    useContext(CartContext);

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.');
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const Shipping = 5.0;

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId);
  }

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form id="order">
          <AddressContainer>
            <AddressHeading>
              <MapPinIcon size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                // error={errors.cep}
                // {...register('cep', { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                // error={errors.street}
                // {...register('street')}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                // error={errors.number}
                // {...register('number')}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                // error={errors.fullAddress}
                // {...register('fullAddress')}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                // error={errors.neighborhood}
                // {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                // error={errors.city}
                // {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                // error={errors.state}
                // {...register('state')}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollarIcon size={22} color="#8047F8" />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>
            <PaymentOptions>
              <div>
                <Radio isSelected={true} value="credit">
                  <CreditCardIcon size={16} />
                  <span>Cartão de débito</span>
                </Radio>
                <Radio isSelected={false} value="debit">
                  <CreditCardIcon size={16} />
                  <span>Cartão de débito</span>
                </Radio>
                <Radio isSelected={false} value="cash">
                  <CreditCardIcon size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <p>Lista de cafés selecionados será exibida aqui.</p>
        <CartTotal>
          {coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <Coffee>
                <div>
                  <img src={coffee.image} alt={coffee.title} />
                  <div>
                    <span>{coffee.title}</span>

                    <CoffeeInfo>
                      <QuantityInput
                        quantity={coffee.quantity}
                        incrementQuantity={() => handleItemIncrement(coffee.id)}
                        decrementQuantity={() => handleItemDecrement(coffee.id)}
                      />
                      <button onClick={() => handleItemRemove(coffee.id)}>
                        <TrashIcon />
                        <span>Remover</span>
                      </button>
                    </CoffeeInfo>
                  </div>
                </div>

                <aside>R$ {coffee.price?.toFixed(2)}</aside>
              </Coffee>

              <span />
            </Fragment>
          ))}

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency'
                }).format(totalItemsPrice)}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                {' '}
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency'
                }).format(Shipping)}
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>
                {' '}
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency'
                }).format(Shipping + totalItemsPrice)}
              </span>
            </div>
          </CartTotalInfo>
          <CheckoutButton>
            <Link to="/success">Confirmar Pedido</Link>
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  );
}
