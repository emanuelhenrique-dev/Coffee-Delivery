import {
  CoffeeIcon,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon
} from '@phosphor-icons/react';

import { CoffeeList, Heading, Hero, HeroContent, Info } from './Home.style';
import { coffees } from '../../assets/coffees/coffees';

import heroBg from '../../assets/hero-bg.svg';
import heroImg from '../../assets/hero.svg';
import { useTheme } from 'styled-components';
import { Card } from './components/Card/Card';

export function Home() {
  const theme = useTheme();

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCartIcon
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                Compra simples e segura
              </div>
              <div>
                <PackageIcon
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                Embalagem mantém o café intacto
              </div>
              <div>
                <TimerIcon
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                Entrega rápida e rastreada
              </div>
              <div>
                <CoffeeIcon
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                O café chega fresquinho até você
              </div>
            </Info>
          </div>
          <img src={heroImg} alt="Café do Coffee Delivery" />
        </HeroContent>

        <img src={heroBg} id="hero-bg" alt="" />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  );
}
