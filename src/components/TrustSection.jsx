import React from 'react';

const companies = ['IBM', 'Microsoft', 'Deloitte', 'Wipro', 'TCS', 'Infosys', 'Accenture', 'Google', 'Amazon', 'Meta'];

const TrustSection = () => {
    return (
        <section className="pt-28 pb-12 border-b border-primary/5 bg-white overflow-hidden">
        

            <div className="relative flex overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap gap-24 py-6 items-center">
                    {[...companies, ...companies].map((company, idx) => (
                        <div
                            key={idx}
                            className="text-5xl font-black text-gray-200 hover:text-primary transition-all duration-700 cursor-default px-6 filter grayscale hover:grayscale-0 hover:scale-125"
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
