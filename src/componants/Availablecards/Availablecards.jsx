import React, { use } from 'react';

 const Availablecards = ({cardpromse, handleclick,setCards }) => {
    const carddata = use(cardpromse)
    
    return (


      <body className='bg-white'>
        
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4   p-6  ">

{
        carddata.map(cards=> 
  <div  onClick={() => {
handleclick()

    setCards( ddd => ddd + 1);

  }} class="bg-white shadow-md rounded-xl p-4 flex flex-row sm:flex-row justify-between items-start sm:items-center gap-3 border border-gray-100 max-w-xl">
    
    
    <div>
      <h2 class="text-lg font-semibold text-gray-800">
      {cards.title}
      </h2>
      <p class="text-gray-600 text-sm mt-1">
      {cards.description}
      </p>

      <div class="flex items-center gap-3 mt-2 text-sm">
        <span  class="text-gray-500">#100{cards.id}</span>
        <span class="text-red-500 font-semibold">{cards.priority}</span>
        <span class="text-gray-600">{cards.customer}</span>
        <span class="flex items-center gap-1 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        {cards.createdAt}
        </span>
      </div>
    </div>

    
    <div class="flex items-center gap-2 bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full text-sm">
      <span class="w-2 h-2 bg-green-500 rounded-full"></span>
      Open
    </div>
  </div> )


}


  

</div>


<div className='bg-gray-200 pl-4 pt-3 rounded-2xl  text-gray-950 -translate-y-200 translate-x-400  w-[250px] h-[200px] ' >
    <h1 className='  text-2xl font-bold '  >Task Status</h1>
<p   className='   font-bold ' >    Select a ticket to add to Task Status</p>


<h5  className='pt-4 text-2xl'>Resolved Task</h5>
<p1>No resolved tasks yet.</p1>
</div>




      </body>      













    );
};

export default Availablecards;