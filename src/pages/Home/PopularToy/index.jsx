import popularToyData from "./popularToyData";

const PopularToy = () => {
  return (
    <section className="bg-primary-50">
      <div className="max-w-screen-xl mx-auto p-4 md:py-24">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-8">
          Popular Toys
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularToyData.map(({id, name, image, price}) => (
            <div key={id} className="card bg-base-100 shadow-xl">
              <figure>
                <img className="w-full px-5" src={image} alt={name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
                <h3 className="text-xl">${price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToy;
