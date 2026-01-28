import Image from "next/image";
import { Star } from "lucide-react";
import c1 from "@/public/testimonials/testimonial-image04.jpg";
import c2 from "@/public/testimonials/testimonial-image01.jpg";
import c3 from "@/public/testimonials/testimonial-image03.jpg";

const testimonials = [
  {
    title: "Precision, Speed, and Big-Four Quality",
    img: c2,
    desc: "In the volatile landscape of financial technology, we required an audit partner who possessed both the rigorous scrutiny of a global institution and the agility of a boutique consultancy. Julian and his team did not merely check boxes; they provided a masterclass in fiscal stewardship. Their insights into our risk framework were transformative, providing our board with a level of assurance that is, quite frankly, unparalleled in the UK mid-market.",
    client: "Julian Vane, CEO of Aetheris FinTech",
    location: "Derby, UK",
  },
  {
    title: "Heritage, Tax Efficiency, and Discretion",
    img: c1,
    desc: "Managing a legacy estate requires a delicate balance between tradition and modern fiscal efficiency. Eleanor’s mastery of UK tax legislation and inheritance strategy has been indispensable. Her approach is characterized by a rare combination of intellectual depth and absolute discretion. She has navigated our family’s complex international interests with a poise that has secured our financial heritage for the next generation.",
    client:
      "The Right Honourable Alistair Thorne, Director of Thorne & Co. Holdings",
    location: "London, UK",
  },
  {
    title: "Cross-border Expertise and Regulatory Liaison.",
    img: c3,
    desc: "Cross-border compliance is a minefield of regulatory divergence. Sarah’s background in international tax was evident from our first engagement; she dismantled complexities that our previous advisors found insurmountable. The firm delivers a high-calibre, 'white-glove' service that is increasingly rare. They are not just our auditors; they are our most trusted strategic interlocutors in the United Kingdom.",
    client: "Dr. Aris Volkov, CFO of Magna Global Logistics",
    location: "Manchester, UK",
  },
];

// Main JSX
export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="bg-blue-50 dark:bg-gray-800 py-12 px-4 "
      data-aos="fade-up"
    >
      <div
        className="max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white">
          What our esteemed clients say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 px-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="text-xl font-bold my-4 text-blue-900 dark:text-white">
                &quot;{testimonial.title}&quot;
              </h4>
              <h3 className="text-base italic text-blue-900 mb-4 dark:text-white">
                &quot;{testimonial.desc}&quot;
              </h3>

              <div className="flex flex-row  justify-start gap-3">
                <div className="h-10 w-10  rounded-full relative overflow-hidden">
                  <Image
                    src={testimonial.img}
                    alt="Blog"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-blue-900 dark:text-white">
                    {testimonial.client}
                  </h3>

                  <p className="text-gray-800 dark:text-[#ffffffcf]">
                    {testimonial.location}
                  </p>
                  <div className="flex flex-row gap-3">
                    <Star size={14} fill="gold" color="gold" />
                    <Star size={14} fill="gold" color="gold" />
                    <Star size={14} fill="gold" color="gold" />
                    <Star size={14} fill="gold" color="gold" />
                    <Star size={14} fill="gold" color="gold" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
