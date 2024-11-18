import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 2,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 3,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 4,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 5,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 6,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 7,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 8,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 9,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 2,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 3,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 4,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 5,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 6,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 7,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 8,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                  {
                    id: 9,
                    name: "Жюльен",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 609,
                    items: [{ price: 609 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
