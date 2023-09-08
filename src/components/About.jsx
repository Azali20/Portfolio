import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>


                <p className='text-xl mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga, distinctio repudiandae dolorem quod dignissimos eius. Porro tenetur rem similique soluta voluptatibus quia quisquam deserunt ipsum dignissimos quam assumenda, distinctio, doloribus quos iure vel quod ut eligendi. Aliquam, atque. Enim illo ratione quod accusamus amet delectus magni officiis omnis facere!
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis dolor at architecto quasi, molestiae impedit officiis ullam porro fugiat alias eum odit inventore corporis autem magni placeat nesciunt cum nulla aliquid incidunt doloremque non! Quasi saepe id doloribus esse iure nostrum voluptates, sint quia nisi fugit animi quis cum!
                </p>
            </div>
        </div>
    );
};

export default About;
