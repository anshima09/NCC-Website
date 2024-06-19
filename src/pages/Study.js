import React from 'react'
const documents=[
    {
        id:"1",
        title:"Specialized Subject",
        pdfUrl: "https://drive.google.com/file/d/1hn0YmZh3y2ekbjHsoCb7s7aK5t-pukMh/view",
    },
    {
        id:"2",
        title:"SOP Subject",
        pdfUrl: "https://drive.google.com/file/d/15VHa8unsxGlkSs3IGtEAsnrBYtC1iiUk/view",
    },
    {
        id:"3",
        title:"Common Subject",
        pdfUrl: "https://drive.google.com/file/d/1Q7exIJ1uXxYdSZTvTP0say0w-PU9awiV/view",
    },
    {
        id:"4",
        title:"Weapon Training 1",
        pdfUrl: "https://drive.google.com/file/d/1S9fuFyQuf1JFIUptwF68LkuU3SH1e2n2/view",
    },
    {
        id:"5",
        title:"Weapon Training 2",
        pdfUrl: "https://drive.google.com/file/d/1SwsE0v90EJa2-wcSZv_-V7-grGQRA2a3/view",
    },
    {
        id:"6",
        title:"FAQS BOOK",
        pdfUrl: "https://drive.google.com/file/d/1vUaVQyS-YJGvfj-Tgfwdiyy0XiZLKk9K/view",
    }
]

const Study = () => {
   
    return (
        <>
            <div className="overflow-hidden px-6">
                <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">
                    <section className="text-gray-600 body-font ">
                        <div className="container mx-auto py-8">
                            <h1 className="text-4xl font-semibold underline underline-offset-2  mb-4 text-blue-500 text-center" >STUDY</h1>
                            <p className="m-5 leading-relaxed items-center justify-center text-center text-lg">
                                NCC cadets of Air Wing will be given regular classes by PI Staff that includes SOP (Structural Operational Procedure), specialized subjects and they will be provided air ncc notes. Cadets will be given books present in the library. During the classes cadets can ask any query they wants to. These classes are compulsory to attend because it will be helpful for certificate exams.                            </p>
                        </div>
                        <div className="container mx-auto p-4">
                            <h1 className="text-2xl font-bold mb-4">Study Material</h1>
                            
                                    <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg">
                                      <thead>
                                        <tr>
                                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">PDF Link</th>
                                        </tr>
                                      </thead>
                                      {documents.map((item, key) => {
                                return(
                                      <tbody>
                                          <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                              <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View PDF</a>
                                            </td>
                                          </tr>
                                      </tbody>
                                )})}
                                    </table>
                                    </div>
                       
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Study