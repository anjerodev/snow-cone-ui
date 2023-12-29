import { useState } from 'react'

import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { List } from '@/components/ui/list'
import { SortableList } from '@/components/ui/sortable-list'

const Dog = (id: number, headline: string, supportingText: string) => ({
  id,
  headline,
  supportingText,
})

// prettier-ignore
const mockDogs = [
  Dog(1, 'Labrador Retriever', 'Friendly and outgoing, Labradors are popular family dogs.'),
  Dog(2, 'German Shepherd', 'Intelligent and versatile, German Shepherds excel in service roles.'),
  Dog(3, 'Golden Retriever', 'Loyal and affectionate, Golden Retrievers are great with children.'),
  Dog(4, 'French Bulldog', 'Adaptable and playful, French Bulldogs have a charming personality.'),
  Dog(5, 'Beagle', 'Curious and merry, Beagles are known for their love of exploration.'),
]

const ShopItem = (
  sku: number,
  name: string,
  stock: boolean,
  price: number,
  thumbnail: string
) => ({ sku, name, stock, price, thumbnail })

const mockStore = [
  ShopItem(
    1,
    'Cactus',
    true,
    9.99,
    'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  ShopItem(
    2,
    'Succulent',
    true,
    19.99,
    'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  ShopItem(
    3,
    'Bamboo',
    true,
    29.99,
    'https://images.unsplash.com/photo-1567331711402-509c12c41959?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  ShopItem(
    4,
    'Orchid',
    false,
    39.99,
    'https://images.unsplash.com/photo-1576014131341-fe1486fb2475?q=80&w=3083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  ShopItem(
    5,
    'Bonsai',
    true,
    49.99,
    'https://images.unsplash.com/photo-1599598177991-ec67b5c37318?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
]

const Folder = (url: string, name: string, updated: string, icon: string) => ({
  url,
  name,
  updated,
  icon,
})

const mockFolders = [
  Folder('#documents', 'Documents', '2 days ago', 'folder'),
  Folder('#downloads', 'Downloads', '3 days ago', 'cloud_download'),
  Folder('#photos', 'Photos', 'yesterday', 'image'),
]

const Category = (
  thumbnail: string,
  name: string,
  description: string,
  date: string
) => ({
  thumbnail,
  name,
  description,
  date,
})

const mockCategories = [
  Category(
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Festivals',
    'Festivals Food, music, arts, community, tradition, culture, and celebration - a collection of events around the world.',
    'May 8'
  ),
  Category(
    'https://images.unsplash.com/photo-1555679486-e341a3e7b6de?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Arts',
    'Literature, games, music, physical and visual forms - explore the art that has inspired and moved humanity through history and today.',
    'May 7'
  ),
  Category(
    'https://images.unsplash.com/photo-1559734840-f9509ee5677f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Family & Friends',
    'The relationships that bring and bind us together and shape our world.',
    'May 4'
  ),
]

export const ListWithThumbnailAndTrailingSupportingText = () => {
  return (
    <List>
      {mockStore.map(({ sku, name, stock, price, thumbnail }) => (
        <List.Item key={sku}>
          <List.EdgeSection>
            <img
              src={thumbnail}
              alt={name}
              className="size-14 bg-outlineVariant object-cover"
            />
          </List.EdgeSection>
          <List.Content>
            <List.Headline>{name}</List.Headline>
            <List.SupportingText>
              {stock ? 'In Stock' : 'Out of Stock'}
            </List.SupportingText>
          </List.Content>
          <List.EdgeSection>
            <p className="text-label-lg">${price}</p>
          </List.EdgeSection>
        </List.Item>
      ))}
    </List>
  )
}

export const SortableListExample = () => {
  const [items, setItems] = useState(mockDogs)

  return (
    <SortableList
      items={items}
      onChange={setItems}
      renderItem={({ id, headline, supportingText }) => (
        <SortableList.Item key={id} id={id}>
          <List.EdgeSection>
            <div className="grid size-10 place-items-center rounded-full bg-primaryContainer text-onPrimaryContainer">
              {headline.slice(0, 1).toLocaleUpperCase()}
            </div>
          </List.EdgeSection>
          <List.Content>
            <List.Headline>{headline}</List.Headline>
            <List.SupportingText className="line-clamp-1">
              {supportingText}
            </List.SupportingText>
          </List.Content>
          <List.EdgeSection>
            <SortableList.Handle>
              <Icon symbol="drag_handle" />
            </SortableList.Handle>
          </List.EdgeSection>
        </SortableList.Item>
      )}
    />
  )
}

export const LinksListExample = () => {
  return (
    <List asChild>
      <nav>
        {mockFolders.map(({ url, name, updated, icon }) => (
          <List.Item asChild key={url}>
            <div>
              <List.ActionArea asChild>
                <a href={url}>
                  <List.EdgeSection>
                    <div className="grid size-10 place-items-center rounded-full bg-primaryContainer text-onPrimaryContainer">
                      <Icon symbol={icon} />
                    </div>
                  </List.EdgeSection>
                  <List.Content>
                    <List.Headline>{name}</List.Headline>
                    <List.SupportingText>{`updated ${updated}`}</List.SupportingText>
                  </List.Content>
                </a>
              </List.ActionArea>
              <List.EdgeSection>
                <IconButton
                  variant="standard"
                  onClick={() => console.log(name)}
                >
                  <Icon symbol="info" />
                </IconButton>
              </List.EdgeSection>
            </div>
          </List.Item>
        ))}
      </nav>
    </List>
  )
}

export const DoubleLineListExample = () => {
  return (
    <List className="max-w-md">
      {mockCategories.map(({ thumbnail, name, description, date }) => (
        <List.Item key={name} className="border-b border-outlineVariant">
          <List.EdgeSection>
            <img
              src={thumbnail}
              alt={name}
              className="size-14 rounded-md bg-outlineVariant object-cover"
            />
          </List.EdgeSection>
          <List.Content>
            <List.Headline>{name}</List.Headline>
            <List.SupportingText className="line-clamp-2">
              {description}
            </List.SupportingText>
          </List.Content>
          <List.EdgeSection>
            <p className="self-start text-label-sm">{date}</p>
          </List.EdgeSection>
        </List.Item>
      ))}
    </List>
  )
}
