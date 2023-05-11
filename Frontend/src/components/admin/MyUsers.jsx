import React from 'react'

const MyUsers = () => {
  return (
    <>
     <div className="space">
        <h1>my users</h1>
      </div> 

      <div className="contain">
        <div className="tablex">
          
          <section>
            <span>
              <h5 className='online'> </h5>
            </span>

            <span className='profilePix'></span>

            <span className='email'>
              <p>loremthruhjjyndjjnuj@test.io</p>
            </span>

            <span>
              <button>view</button>
            </span>

            <span>
              <button>disable</button>
            </span>

            <span>
              <button>email</button>
            </span>

            <span>
              <button>delete</button>
            </span>

          </section>
        </div>
      </div>
    </>
  )
}

export default MyUsers
