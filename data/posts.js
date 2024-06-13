// Creating the simple data structures we'll work with.
// How we choose to store and organize this data is very important!
// Different options and techniques for storing data and
// creating relationships between different data sets will be
// explored during lessons on database integrations and techniques.

// The "posts" data will include information about
// social media posts that the users make.
const posts = [
    {
      id: 1,
      userId: 1,
      title: 'Burton',
      content:
        'Burton Snowboards is a privately-owned snowboard manufacturing company that was founded by Jake Burton Carpenter in 1977. The company specializes in products aimed at snowboarders, such as snowboards, bindings, boots, outerwear, and accessories.',
    },
    {
      id: 2,
      userId: 1,
      title: 'Capita',
      content:
        'CAPiTA Snowboards are hand crafted in Austria with self-generated clean energy at The MotherShip™. Shop CAPiTA mens, womens, and kids snowboards & apparel + get the latest news and updates on CAPiTA products and international snowboard team.',
    },
    {
      id: 3,
      userId: 1,
      title: 'K2',
      content:
        'K2 Snowboards are snowboards manufactured by the sports equipment company K2 Sports. K2 Sports was founded by businessman Bill Kirschner in 1962. The company manufactured some of the first sets of fiber-glass skis in the 1960s, and delivered its first lot of 250 pairs of fiberglass skis in 1964.',
    },
    {
      id: 4,
      userId: 2,
      title: 'Rome',
      content:
        'Rome Snowboards, also known as Rome SDS (Snowboard Design Syndicate), is a small snowboard brand based in Waterbury, Vermont. The company was founded in 2001 by former Burton employees Josh Reid and Paul Maravetz, along with their friend Dan Sullivan.',
    },
    {
      id: 5,
      userId: 2,
      title: 'Yes',
      content:
        'YES. Snowboards is a manufacturer of snowboards. It was founded in 2009 and is based in Europe.',
    },
    {
      id: 6,
      userId: 2,
      title: 'Salomon',
      content:
        'Salomon Snowboards is a category of Salomon Group. Marketing for Salomon Snowboards is based in Portland, Oregon, near Mount Hood, while design and development takes place at the base of the French Alps, in Annecy, France.',
    },
    {
      id: 7,
      userId: 3,
      title: 'Gnu',
      content:
        'Weird, innovative, creatives, obsessed with snowboarding, the mysterious materials, advanced geometries, and pioneering radical contours and shapes in search of more fun. Handbuilt in the USA at Mervin Manufacturing ZERO HAZARDOUS WASTE since 1977.',
    },
    {
      id: 8,
      userId: 3,
      title: 'Lib Tech',
      content:
        'Lib Technologies is an American snowboard manufacturer known for innovative snowboard designs and construction. Often referred to as Lib Tech, the company falls under the umbrella of parent company Mervin Manufacturing. Surf company Quiksilver bought Mervin in 1997.',
    },
    {
      id: 9,
      userId: 3,
      title: 'Jones',
      content:
        'Jones Snowboards is a snowboard, snowboard binding, and snowboarding clothing & accessories manufacturer based near Lake Tahoe. The company was founded by renowned freeride snowboarder Jeremy Jones. The company has received numerous awards for its snowboards. Jones snowboards are manufactured in Dubai.',
    },
  ];
  
  module.exports = posts;