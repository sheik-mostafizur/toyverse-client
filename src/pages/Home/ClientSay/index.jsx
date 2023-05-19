import clientSayData from "./clientSayData";

const ClientSay = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4 md:py-24">
      <h1 className="font-bold text-3xl md:text-5xl text-center mb-8">
        Our Client say{`'`}s
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {clientSayData.map(({id, name, image, feedback, profession}) => (
          <div
            data-aos="fade-up"
            key={id}
            className="w-full bg-primary-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center px-4 py-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={image}
                alt={name}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {profession}
              </span>
              <div className="flex flex-col mt-4 md:mt-6 px-2">
                <span className="font-bold text-4xl block mx-auto text-primary-600">
                  ❝
                </span>
                <p>{feedback}</p>
                <span className="font-bold text-4xl block mx-auto text-primary-600">
                  ❞
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSay;
