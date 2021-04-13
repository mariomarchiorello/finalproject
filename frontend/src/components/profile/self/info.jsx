import React from 'react'
import { Info } from './style'

export default function InfoSection() {
    return (
        <>
            <Info>
                <section className='right'>
                    <div>
                        <p className='type'>Username</p>
                        <p className='value'>Value</p>
                    </div>
                    <div>
                        <p className='type'>First Name</p>
                        <p className='value'>Value</p>
                    </div>
                    <div>
                        <p className='type'>Home Latitude</p>
                        <p className='value'>Value</p>
                    </div>
                    <div>
                        <p className='type'>Vessel</p>
                        <p className='value'>Value</p>
                    </div>

                </section>
                <section className='left'>
                    <div>
                        <p className='type'>Email</p>
                        <p className='value'>Value</p>
                    </div>
                    <div>
                        <p className='type'>Last Name</p>
                        <p className='value'>Value</p>
                    </div>
                    <div>
                        <p className='type'>Home Longditude</p>
                        <p className='value'>Value</p>
                    </div>

                </section>
            </Info>  
        </>
    )
}
