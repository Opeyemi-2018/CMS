import { IoIosArrowRoundForward } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";

const App = () => {
  const glossarys = [
    { id: 1, title: 'API gateway', content: "An API gateway is a crucial component in modern software development and architecture, often described as the 'front door' for applications to access data and functionalities from backend services. It serves as an intermediary between client applications and backend services, managing complex operations such as request routing, authorization, monitoring, and traffic management." },
    { id: 2, title: 'Accessibility', content: "Accessibility is a practice centered around inclusivity, aiming to design products, services, and environments that are usable by everyone. It's not just about accommodating people with disabilities; it also focuses on enhancing the user experience for all individuals. This includes those using mobile devices or those with slow internet connections. It's a moral and legal responsibility for developers and designers to ensure their work is accessible." },
    { id: 3, title: 'Angular', content: "Angular is an open-source JavaScript framework, developed and maintained by Google, that provides a standard structure and additional features to simplify web and mobile application development." },
    { id: 4, title: 'Backend as a Service', content: "Backend as a Service (BaaS) is a cloud computing model that simplifies app development, offering efficiency, scalability, and cost-effective solutions for developers." },
    { id: 5, title: 'Cache invalidation', content: "Cache invalidation is a critical process in computer systems that ensures the removal or updating of stale data, enhancing performance and accuracy." },
    { id: 6, title: 'Client Side Rendering (CSR)', content: "Client Side Rendering (CSR) is a pivotal aspect of modern web development, ensuring a seamless and interactive user experience by rendering content in the browser." }
  ];

  // Function to handle scrolling to a specific letter
  const scrollToLetter = (letter) => {
    const element = document.getElementById(`glossary-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="lg:px-16 px-6">
      <div className="mt-20 flex gap-2 flex-col md:items-center items-start">
        <h1 className="md:text-5xl mb-4 font-bold text-4xl">CMS Glossary</h1>
        <p className="md:text-center md:w-[700px] w-full text-gray-700 md:text-[20px] text-[22px]">
          Explore definitions and explanations for terms relating to the world of CMSes and Sanity. Let this be your guide to the content management world.
        </p>
      </div>

      <nav className="overflow-x-auto my-7">
        <ul className="flex gap-2 lg:justify-center justify-start text-[14px] whitespace-nowrap">
          {Array.from({ length: 26 }, (_, index) => {
            const letter = String.fromCharCode(65 + index); // Generate letters A to Z
            return (
              <li
                key={letter}
                className="rounded-full lg:border-none border border-gray-200 p-4 w-8 h-8 flex items-center justify-center cursor-pointer"
                onClick={() => scrollToLetter(letter)}
              >
                {letter}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="my-10 mb-20">
        <div className="mb-4 flex items-center justify-between gap-36">
          <div className="lg:flex hidden flex-col gap-1 text-nowrap">
            <h1 className="flex items-center gap-1 font-semibold text-gray-700">
              <span>
                <IoBookOutline />
              </span>
              All glossary terms
            </h1>
            <div className="w-5 h-[1px] bg-gray-400"></div>
          </div>
          <div className="sm:mx-16 mx-0 w-full h-[1px] bg-gray-500"></div>
        </div>
        <div className="flex lg:gap-36 gap-0">
          <div>
            {glossarys.map((glossary) => {
              const { title, id } = glossary;
              return (
                <div key={id} className="mt-2">
                  <h1
                    className="lg:inline hidden text-nowrap text-gray-700"
                  >
                    {title}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="w-[650px]">
            {glossarys.map((glossary) => {
              const { content, title, id } = glossary;
              const firstLetter = title[0].toUpperCase(); // Get the first letter of the title
              return (
                <div
                  key={id}
                  className="flex flex-col gap-1 mb-4 hover:bg-gray-100 transition-all duration-300 px-3 py-2"
                >
                  <h1                     id={`glossary-${firstLetter}`} // Assign an id to the element
                     className="md:text-3xl text-2xl font-bold mb-2">{title}</h1>
                  <p className="md:text-[17px] text-[19px] text-gray-700">
                    {content.substring(0, 130)}
                  </p>
                  <h1 className="flex items-center gap-1">
                    Read more
                    <span>
                      <IoIosArrowRoundForward size={25} className="text-red-600" />
                    </span>
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
