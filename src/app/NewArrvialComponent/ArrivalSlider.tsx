"use client"; 


const ArrivalSlider = () => {
  const cards = [
    { id: 1, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 1' },
    { id: 2, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 2' },
    { id: 3, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 3' },
    { id: 4, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 4' },
    { id: 5, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 5' },
    { id: 6, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 6' },
  ];

  return (
    <div className="flex flex-wrap gap-10 px-12">
      {cards.map(card => (
        <div key={card.id} className="w-[250px] h-96 rounded-md shadow-md overflow-hidden">
          <img src={card.imageUrl} alt={card.title} className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-lg font-bold">{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArrivalSlider;
