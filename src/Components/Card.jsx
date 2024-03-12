const Card = ({ isFeatured, recipeData }) => {
  return (
    <div
      className={`rounded-md overflow-hidden bg-white shadow-lg ${
        isFeatured && "col-span-1 sm:col-span-2"
      }`}
    >
      <div className>
        <img
          className='h-[250px] w-full object-cover'
          src={recipeData.image}
          alt={`Photo of ${recipeData.name}`}
        />
      </div>

      <div className='p-4'>
        <h2 className='font-bold text-2xl'>{recipeData.name}</h2>
        <p className='text-slate-600'>{recipeData.difficulty}</p>
        <div className='flex gap-1 mt-3'>
          <div className='text-xs font-bold p-1 bg-gold border border-gold rounded-md'>
            {`Prep Time: ${recipeData.prepTimeMinutes} Minutes`}
          </div>
          <div className='text-xs font-bold p-1 bg-sunshine border border-gold rounded-md'>
            {`Cook Time: ${recipeData.cookTimeMinutes} Minutes`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
