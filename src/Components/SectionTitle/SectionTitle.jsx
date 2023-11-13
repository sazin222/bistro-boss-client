

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto my-6 text-center md:w-3/12">
             <h2 className="text-yellow-600 mb-2">---{subHeading}---</h2>
            <p className="text-3xl py-3 uppercase border-y-4">{heading}</p>
           
        </div>
    );
};

export default SectionTitle;