import React from 'react';
import { Grid } from '@material-ui/core';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import one from '../images/sean_salazar.jpg';
import two from '../images/aubrey_hoover.jpg';
import three from '../images/deegan_wallace.jpg';

function Testimonials() {
    return (
        <div>
            <Grid container spacing={3}>

                <Grid item sm={12} md={4}>
                    <table>
                        <tr>
                            <td className='test-td'>
                            <FormatQuoteRoundedIcon className='quotes' />
                            </td>
                            <td className='test-para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec nisl ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh fringilla
                            </td>                         
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <img className="test-img" src={one}/>
                                <span className="test-person">Sean Salazar</span>

                            </td>
                        </tr>
                    </table>
                </Grid>

                <Grid item sm={12} md={4}>
                    <table>
                        <tr>
                            <td className='test-td'>
                            <FormatQuoteRoundedIcon className='quotes' />
                            </td>
                            <td className='test-para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec nisl ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh fringilla
                            </td>                         
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <img className="test-img" src={two}/>
                                <span className="test-person">Aubrey Hoover</span>

                            </td>
                        </tr>
                    </table>
                </Grid>

                <Grid item sm={12} md={4}>
                    <table>
                        <tr>
                            <td className='test-td'>
                            <FormatQuoteRoundedIcon className='quotes' />
                            </td>
                            <td className='test-para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec nisl ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh fringilla
                            </td>                         
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <img className="test-img" src={three}/>
                                <span className="test-person">Deegan Wallace</span>

                            </td>
                        </tr>
                    </table>
                </Grid>

            </Grid>
        </div>
    )
}

export default Testimonials
