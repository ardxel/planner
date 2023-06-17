const getImage = (url: string) => {
  return new URL(url, import.meta.url).href;
}

export const basketListConfig = [
  {
    index: 1,
    src: getImage('../../../../images/couch.png'),
    title: 'item 1'
  },
  {
    index: 2,
    src: getImage('../../../../images/chair.jpg'),
    title: 'item 2'
  },
  {
    index: 3,
    src: getImage('../../../../images/closet.jpg'),
    title: 'item 3'
  },
  {
    index: 4,
    src: getImage('../../../../images/sink.png'),
    title: 'item 4'
  },
  {
    index: 5,
    src: getImage('../../../../images/table.jpg'),
    title: 'item 5'
  },
  {
    index: 6,
    src: getImage('../../../../images/tv.jpg'),
    title: 'item 6'
  }
]