import Image from "next/image";

const IntroductionCard = () => {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full"
    >
      <div className="bg-white">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg bg-white"
          src="/intro.JPG"
          alt="Image Is Missing"
          width={900}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Er. Aniket Gupta
        </h5>
        <ul>
          <li>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Mechanical Engineer from IIT Roorkee
            </p>
          </li>

          <li>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Gate 17 Ranker in 2022
            </p>
          </li>
          <li>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Gate 52 Ranker in 2021
            </p>
          </li>
        </ul>
      </div>
    </a>
  );
};

export default IntroductionCard;
