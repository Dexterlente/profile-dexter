import React from 'react'
import FullScreenSection from './FullScreenSection'
import { VStack, HStack, Center, Square,  } from '@chakra-ui/react'


const TechnologyPage = () => {
  return ( <FullScreenSection backgroundColor="black">
            <VStack spacing='40px' id='techstack-section'>
                <h1 className='text-white text-5xl mt-10 font-bold'>Tech Stack</h1>
            <HStack spacing='100px' mt="100px">
                <Center w='130px' h='130px'>
                <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 p-2 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <Square size='130px'>
                        <img className='relative p-1 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>
                        <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                        </Square>
                    </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px' className='h-10'>                       
                            <img className="relative px-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />          
                        </Square>
                    </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                 
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />            
                        </Square>
                    </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />             
                        </Square>
                        </div>  
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                                             
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />                                 
                        </Square>
                        </div>    
                    </Center>
            </HStack>
            <HStack spacing='100px'>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                                       <img className="relative p-1 bg-[#36454F] rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />                       
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                                    <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />                     
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                                    <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />                     
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                                    <img className="relative bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />                     
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                                    <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />                     
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                                    <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />                 
                        </Square>
                        </div>
                    </Center>
            </HStack>
            <HStack spacing='100px'> 
                     <Center w='130px' h='130px'>
                     <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />               
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />                
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />                
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />               
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />              
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <Square size='130px'>                                                  
                                    <img className='relative bg-black rounded-full leading-none flex items-center divide-x divide-gray-600' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" />              
                                </Square>
                        </div>
                    </Center>
            </HStack>
            <HStack spacing='100px'>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-[#36454F] rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />            
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />             
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" />            
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg" />           
                        </Square>
                        </div>
                    </Center>
                    <Center w='130px' h='130px'>
                    <div class="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <Square size='130px'>                                                  
                            <img className="relative p-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />            
                        </Square>
                        </div>
                    </Center>
                </HStack>
            </VStack>
    </FullScreenSection>

    
  )
}

export default TechnologyPage