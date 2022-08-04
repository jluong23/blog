import BlogImage from "../../../components/BlogImage";
import BlogGallery from "../../../components/BlogGallery";
import { Link } from "react-router-dom";


const Content = (
    <div> 
        <p>
            During the first quarantine in March 2020, I moved back home after first year of university ended abruptly, picking up chess as my new pandemic hobby. 
            Aside from the occasional puzzle solving in sixth form, I knew some basic principles but not much else. 
            Within a few months, the Queen's gambit Netflix show and 'Chess Boom' on Twitch and YouTube started which had me hooked.
        </p>
        <br/>
        <p>
            I continued playing online chess, reaching 2000 rating in Rapid on <a href="https://lichess.org">lichess.org</a> in August 2020 and writing this <Link to={"/posts/1"}>blog post</Link>. 
        </p>
        <BlogImage blogId={3} imgName="qg.jpg" imgAlt="Front cover of the Queen's Gambit novel." maxWidth={"400px"} imgCaption="The Queen's Gambit novel, adapted by the Netflix series"/>
        <p>
            Second year came around in September 2020 and I started playing with the University Chess Society. This all took place online due to the pandemic which was awkward at times; it was difficult to discuss
            a previous match with 8+ people in the same Discord voice chat. However, it was nice to have a regular weekly activity and meet other students who enjoyed playing chess,
            especially during those excrutiating two week isolation periods in the house.
        </p>
        <br/>
        <p>
            It's kind of a bizarre thought that I would become good friends with these guys a year who played chess online on Thursdays evenings, 
            travelling to different chess tournaments and picking up bouldering with these lot.
            Now that I've graduated, the time just flew by.
        </p>
        <BlogImage blogId={3} imgName="donc.jpg" imgAlt="" maxWidth={"500px"} imgCaption="Doncaster Chess Congress, February 2022"/>
        <p>
            But back to early 2021: I started improving a lot during this period, playing more competitively in the Rotherham Online League. 
            This league included local club players in Sheffield and South Yorkshire who transitioned to playing online after the OTB (Over the Board / in person) tournaments had been cancelled.
        </p>

        <br/> 
        <p>
            The Rotherham Online matches were played weekly and were either Rapid (~20m) or Classical (~60m) time formats. 
            Although matches were played online, I remember feeling really nervous before and during each game. Some of these guys
            had only played OTB, so their online ratings were inaccurate with only a few games on their account. I learnt a ton about opening preparation and also developing the mindset
            for playing longer 1h+ games.
        </p>

        <BlogImage blogId={3} imgName="rotherham-online.png" imgAlt="" maxWidth={"500px"} imgCaption="My summary playing in the Rotherham Online Chess League."/>

        <p>
            The social distancing situation started to improve at the end of my second year, going into summer of 2021. 
            We moved to playing outside in front of the Student's Union and I met all of the online voices in-person which was humorous at times, a common conversation topic asking what their
            chess or Discord username is. On occassion, it felt like I was playing an old game from online but in-person and I'd already known who my opponent was by opening or play style.
            I don't think anyone played but Alex played the Kings Gambit, or Ale with the Tarrasch Defence. 
        </p>
        <br/> 
        <p>
            These in-person chess meetups were really fun. 
            After the regular hour session, we would continue playing more chess in the pub with more fun variants like 'Hand and Brain' or faster time formats like bullet (1min each).
            I'll never forget playing bullet against former team captain Alex at like 4am, stumbling about different pubs and ending up in some accomodation common room.
            The games were always so stupid after a few drinks, but it got to the point where I was sobering up, the sun was coming back up and we were playing decent chess again.
        </p>
        <BlogImage blogId={3} imgName="su.jpg" imgAlt="" maxWidth={"500px"} imgCaption="Chess in front of Sheffield SU, June 2022. Don't have any pictures from 2021, so imagine this with more people!"/>
        <p>
            My third year came around in September 2021 and was now part of the University Chess Society Committee as Team Captain. The first chess meetup was so ridiculous. We expected a huge 
            turnout from the new mailing list and bought loads of sets in anticipation. It still wasn't enough. The room was packed and we were scrambling for spare chess sets and seats. 
            Some people were just standing at the back waiting for a chair to free up and I don't think I even got one game in.
        </p>
        <BlogImage blogId={3} imgName="first_chess_night.jpg" imgAlt="" maxWidth={"500px"} imgCaption="The first chess meetup. A respectful turnout thanks to Queens Gambit."/>
        <p>
            Sheffield OTB (Over the Board) competitions started running again in March 2022. Our main tournament was the Sheffield and District Summer League, playing 
            team matches fortnightly. Half of the games were played in our home venue at University and the other half took us around different towns / cities in South Yorkshire. 
            
        </p>
        <BlogGallery imgCaption="Summer League Matches: Away at Barnsley. At home vs Hillsborough">
            <BlogImage blogId={3} imgName="barnsley.jpg" imgAlt=""/>
            <BlogImage blogId={3} imgName="summer_league.jpg" imgAlt=""/>
        </BlogGallery>
        <p>
            Each game could go two hours or longer and I started to feel the effects of psychology in chess. I've had a few games where I had a completely winning position and end up settling for a draw 
            or pushed too hard and lost because of the pressure which clouded my thoughts. Same scenario on the other side too, salvaging lost positions.  
            It can feel like a lot of pressure with everyone looking standing around and watching your game too. I know that I need to spend a lot of time calming myself down, 
            walking around the room rather than thinking about the position.
        </p>
        <BlogImage blogId={3} imgName="b_team.jpg" imgAlt="" imgCaption="Our B Team (who won their division) vs Woodseats"/>
        <BlogImage blogId={3} imgName="bham.jpg" imgAlt="" imgCaption="Friendly University Rapid Tournament in Birmingham."/>

        <p>
            Chess at University has been a great experience. It became a bit of a meme the amount of times I said that I would quit chess because of the pressure and stress that I put on myself. 
            It's definitely an unforgiving game, the advantage can completely flip in a game from one oversight and the margin of error becomes so small as the skill level rises. However,
            the victories are satisfying and I've met some good friends through the game. You can learn a thing or two about people by playing a couple of games against them.
            I've also learnt alot about myself, learning to handling my emotions in a competitive mindset and reflect on my losses. I hope this blog has shown a different perspective on the game and I hope 
            chess will continue strong at the University of Sheffield.
        </p>



    </div>
)
  
export default Content;
