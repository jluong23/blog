import styled from "styled-components";
import BlogImage from "../../../components/BlogImage";

const Gallery = styled.figure`
        display: flex;
        & figure img{
                object-fit: cover;
                width: 100%;
                height: 100%;
                max-width: 500px;
        }
`


const Content = (
    <div>
        <p>It's Easter Sunday and first year of university feels pretty finished due to a global pandemic. My experience at Sheffield has been vastly different to what I thought it would be like and it definitely wasn't the easiest times but I've learnt a lot and wouldn't take back any experience really.</p>
	<BlogImage blogId={2} imgName="img_20191021_235240147_hdr-1.jpg" imgAlt="" imgCaption={"The mess of my room"}/>
        <Gallery>
	<BlogImage blogId={2} imgName="img_20190923_140235781.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191002_120635497-1.jpg" imgAlt=""/>
        </Gallery>
        <p>Free McFlurry at Freshers Fair (my camera went super HD for this shot for some reason) and finding some food near the Diamond with Junse which is sadly closed now. They gave out so much pizza at these fairs as well.</p>
        <Gallery>
	<BlogImage blogId={2} imgName="finn_bruh.png" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191103_005414648.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191102_180421108.jpg" imgAlt=""/>
        </Gallery>
        <p>HackSheffield, see my blog post <a href="https://keeponrunningjames.wordpress.com/2019/11/03/hack-sheffield-5-24-hours-of-web-development/">here</a>. Exclusive Finn bruh_face.png.</p>
        <Gallery>
	<BlogImage blogId={2} imgName="img_20190923_092446406.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20190923_094021457.jpg" imgAlt=""/>
        </Gallery>
        <p>First Sheffield run, amazed by the huge trees in Porter Valley.</p>
        <Gallery>
	<BlogImage blogId={2} imgName="img_20191006_221832024.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191216_201542548.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="snapchat-1831123840.jpg" imgAlt=""/>
        </Gallery>
        <p>Flat call of duty and food! Been fun living with all of you lot.</p>
	<BlogImage blogId={2} imgName="img_20191023_231255028.jpg" imgAlt=""/>
        <p>(apart from Marcin and his banana ice cream)</p>
        <Gallery>
	<BlogImage blogId={2} imgName="img_20191002_171218010-copy.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191002_175236450.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191027_150151640_burst000_cover_top-copy.jpg" imgAlt=""/>
        </Gallery>
        <p>I look forward to 2 more years of mud infested showers from more cross country and fell runs in the Peak District.</p>
        <Gallery>
	<BlogImage blogId={2} imgName="received_791234197963795.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191109_144346818_hdr.jpg" imgAlt=""/>
        </Gallery>
        <p>Oh how I miss my fresh creps.</p>
        <Gallery>
	<BlogImage blogId={2} imgName="lift.png" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191101_101917730.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191105_220240742.jpg" imgAlt=""/>
        </Gallery>
        <p>Three seemingly random pictures but actually significant (maybe not the first, that's just Robson staring at a lift). The second picture is when we had a door and it wasn't smashed, feels like ancient times. The last picture is Harold the Endcliffe cat who scared me one time standing outside the door, waiting for me to open the front door out.</p>
	<BlogImage blogId={2} imgName="snapchat-835898544.jpg" imgAlt=""/>
        <p>Picture in Bierkeller with Alex and Robson, looking in even worse shape than after running Hampton Court Half Marathon (<a href="https://keeponrunningjames.wordpress.com/2018/03/19/hampton-court-half-marathon-18-03-18/#jp-carousel-125">link</a>).</p>
        <Gallery>
	<BlogImage blogId={2} imgName="received_453842115265611.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="76756970_10215134694068011_2173026875071266816_n.png" imgAlt=""/>
	<BlogImage blogId={2} imgName="received_606280930158746.jpeg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20200201_133500397_hdr.jpg" imgAlt=""/>
        </Gallery>
        <p>South Yorkshire XC at Kiveton Park and BUCS XC at Edinburgh. Energy of BUCS was mental (<a href="https://youtu.be/Qz-ASLchXfo">Mens A race start</a>), never forget the old guy who tripped and landed on the mud trying to cross over the barrier to spectate the quicker runners.</p>
	<BlogImage blogId={2} imgName="img_20200211_094736457.jpg" imgAlt=""/>
        <p>Sheffield weather was a big yikes.</p>
        <Gallery>
	<BlogImage blogId={2} imgName="img_20190928_085231537.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191215_111917617.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="img_20191215_112501110.jpg" imgAlt=""/>
        </Gallery>
        <p>Endcliffe Parkrun and the beautiful Rivelin Valley trail.</p>
        <Gallery>
	<BlogImage blogId={2} imgName="img_20200216_183611422.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="snapchat-2130413755.jpg" imgAlt=""/>
	<BlogImage blogId={2} imgName="untitled.png" imgAlt=""/>
        </Gallery>
        <p>The last two weeks or so. Bit of Wii sports. Trip to peak district with Robson harnessing energy from the sun. Finally, bit of beer pong with a rogue brussel sprout.</p>
        <Gallery>
	<BlogImage blogId={2} imgName="whatsapp-image-2020-04-12-at-10.48.26-1.jpeg" imgAlt=""/>
	<BlogImage blogId={2} imgName="whatsapp-image-2020-04-12-at-10.48.26.jpeg" imgAlt=""/>
        </Gallery><p>Moving back home, goodbye Yarncliffe F2!</p>
    </div>
)
  
export default Content;
