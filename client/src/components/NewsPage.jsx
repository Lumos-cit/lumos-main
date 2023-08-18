import React from 'react'


function NewsPage() {
  return (
    <div className="bg-zinc-800	">
      <div className="p-5 lg:p-20">
        <h1 className="poppins-bold text-white">29, March 2023</h1>
        <br></br>
        <h1 className="poppins-bold text-[50px] lg:text-[100px] text-white">A BEAUTIFUL POEM</h1>
        <br></br>
        <h1 className="poppins-bold underline text-white">By Vijay KP(EEE)</h1>
        <br></br>
        <p className='poppins-regular lg:text-[20px] text-white'>
        As a student, it’s easy to fall into financial traps that can ruin your long-term financial goals. Right from tuition fees, accommodation, textbooks, entertainment, traveling, and social life to balance. 
        It’s essential to be aware of and avoid students’ biggest financial traps. These tips will help you avoid the most significant financial pitfalls students face.
        <br></br>
        <br></br>
        <img src = "poem.jpg" alt="poem" />
        <br></br>
        Overspending can be a major problem for college students, especially those who are living on a limited budget. 
        To avoid overspending, it’s important to set a budget and stick to it. This means tracking your expenses, avoiding impulse purchases, and prioritizing your spending. 
        <br></br><br></br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eos ex accusamus necessitatibus quasi excepturi obcaecati enim porro dolorem ratione consequuntur, fugiat quo amet odio magnam impedit expedita perferendis officia!
        <br></br><br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quos rerum ipsum laborum pariatur odit quae reprehenderit dolor blanditiis fugiat dolorem facilis cupiditate exercitationem rem? Necessitatibus eligendi officiis modi nam.
        </p>
        <br></br>

        <div className="flex space-x-8 items-center p-10 ">
      <div className="w-197 max-h-56 relative top-2214 left-89 bg-gray-100 ">
      <img src="#.jpg" alt="Image" className="max-w-full h-auto" />
      </div>
      <div className="w-501 h-166 relative top-2245 left-306 text-white ">
      <h2 className="poppins-bold text-xl">AHMED MUSTAFA N</h2>
          <p className="poppins-regular text-white">
          B.Tech AI&DS CIT 25' graduate, AI enthusiast, and Web Dev learner. Content Writer at Chennai Institute of Technology, volunteer at Lumos, CIT. Active member of GDSC@CIT. Ready to make an impact in AI and beyond.
          </p>
      </div>
    </div>
        


      </div>
    </div>  
  )
}

export default NewsPage
