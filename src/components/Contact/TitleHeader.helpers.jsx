// The TitleHeader component is used to display a title and a subtitle in the contact section of the application. It is styled to be centered and uses Tailwind CSS classes for styling. The component accepts two props: `title` and `sub`, which are displayed in a structured format. The component is designed to be reusable, allowing different titles and subtitles to be passed as props when needed.

// title === h2 sub === p

// id="modal-modal-description" і id="modal-modal-title" are used for accessibility purposes, allowing screen readers to identify the content of the modal.

/*
  Helper functions used exclusively
  by the files in this directory.
*/

const TitleHeader = ({ title, sub }) => {

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-[70%] text-center">
        <p id="modal-modal-description">{sub}</p>
      </div>
      <div id="modal-modal-title" className="font-semibold text-3xl md:text-5xl text-center">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
