import styled from "styled-components";

const Wrapper = styled.div`
  & img {
    width: 100%;
    @media screen and (min-width: 800px) {
      width: 25%;
    }
  }
` 


const blogDict = 
{
  1: (
    <Wrapper>
        <p>As a celebration of reaching 2000 rating in Rapid on <a href="http://lichess.org">lichess.org</a> (a brilliant open source website where you can learn and play chess) , I wanted to reflect on the famous 'Shower of Gold' game and a terrible game I played on lichess which reminded me of the tactical motif used by Marshall - except executed poorly by me. </p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/ratings-1.png?w=238"/><figcaption >Sweet 2000 rating in Rapid.</figcaption></figure>
        <p>Right before I played this game, I was collecting all of my uni stuff from the garage to prepare what I needed to bring back up to uni. I also found a dusty old chess book I was given when I was a kid called 'The Big Book of Chess' by Eric Schiller (2006).  The book goes over a broad range of topics about the game of chess; from showing how the pieces move and explaining common terms used by chess players to chess etiquette in tournaments and what players usually wear playing in them.  </p>
        <p>I probably didn't read it properly as a kid since I couldn't remember much about the content, but it was nice to see those famous games in the book that I later saw by other means as I've gotten older, like the Shower of Gold game or Bobby Fischer's queen sacrifice to windmill tactic. There was also a section on Chess Playing Software, where you could buy one for under $50 and would beat grandmasters regularly. These computers are much more publicly available nowadays, so it's crazy how much has changed since then.</p>
        <h3 >Frank Marshall's 'Shower of Gold' Game</h3>
        <p>This game was played by Frank Marshall and Stepan Levitky in 1912 and the 'Shower of Gold' name comes from the audience supposedly throwing gold coins on the board after Marshall played a spectacular move. There's reason to believe this didn't happen and chess players are pretty crazy but a brilliant move nonetheless. Definitely more beautiful than my game.</p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/23.png?w=663"/><figcaption >Marshall plays Qg3!! as Black.</figcaption></figure>
        <p>After Qg3, the threat is Qxh2 with checkmate. So White must remove the black queen. However, neither the f or g pawn can take the queen as White will be checkmated soon after.</p>
        <p>If White plays fxg3, Ne2 pushes the king into the corner, then the ice skater Rxf1 is a back rank checkmate.</p>
        <p>If White plays hxg3, Ne2 is mate in one!</p>
        <p>Therefore, White must take with the queen, but Ne2 also follows with a juicy fork hitting the queen and king.</p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/24-1.png?w=737"/><figcaption >Qxg3, Ne2+.</figcaption></figure>
        <p>After Kh1 escaping the check, Black grabs the queen with Nxg3+ and White is unable to take the knight. fxg3 does not work for the same reason as before, and hxg3 is illegal as the h pawn is pinned by Black's rook.</p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/25.png?w=737"/><figcaption >Kh1, Nxg3.</figcaption></figure>
        <p>After Kg1 which is forced, Black has at least a draw with Ne2+ and Ng3+ perpetual check or can retreat the rook being up a knight after Ne2+, Kg1, Rh6. White resigned in this position.</p>
        <h2 >James Luong's 'Shower of Blunders'</h2>
        <p>In this game, I was playing the black pieces at rating 1929 against Lichess user klimo rated 1904. Taking a look at a few moments before my 'golden move', My first blunder occurs by castling king side, losing a minor piece white just took. I thought I was threatening checkmate with Qxf2 but was blind and forgot about the white queen on c2 defending the f2 square.</p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/16me-1.png?w=738"/><figcaption >Nxc6, O-O??</figcaption></figure>
        <p>The White knight moves back to e5. The best move was to take my strong dark squared bishop on b4, as the attack comes quickly with Bxa4!. </p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/17me.png?w=746"/><figcaption >Ne5, Bxa4!</figcaption></figure><p>White's queen is unable to capture the bishop because of the mate threat on the f2 square. Now, my mistake castling kingside and sacrificing my knight seems more powerful than it should. After a few repetitions with Black's bishop bullying White's overloaded queen, Black's bishop ends up on d1, and White's queen is in the corner on a2.</p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/18me.png?w=739"/><figcaption >Qe2 (defending the f2 square), Bd1, Qa2.</figcaption></figure>
        <p>In this position, My 'golden' move comes with Rf3. My idea was to stack the rooks while trying to bait White to move the g pawn away which will lead to checkmate.</p>
        <p>If gxf3, Qh3 check. Kg1 is forced and Bxf3 is forced mate with Qxg2 after White's move.</p>
        <p>If g3, Qh3 check, Kg1 is forced again and Black stacks the rooks with Raf8; White's kingside has collapsed.</p>
        <p>Therefore, the knight has to take the rook. However, Rf3 makes no threats in the first place, so the engine says my 'golden' move is a blunder and plays h3 to stop and Qh3 possibilities. </p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/19me.png?w=744"/><figcaption >Nxf3, exf3.</figcaption></figure>
        <p>After knight takes and pawn takes, White knows g3 or gxf3 is losing because of the same reasons so plays Rg1? instead, hanging the pawn on h2 to the queen. The threat included after Qxh2 from black is Be2 check and winning the rook with Qxg1. I played Rf8 instead, bringing more pieces into the attack. White then plays Bd2 with a discovered attack on my light squared bishop from White's rook on a1.</p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/20me.png?w=742"/><figcaption >Rg1?, Rf8, Bd2.</figcaption></figure>
        <p>I was playing incredibly slow this game and ran into time trouble, playing Qxh2 grabbing the pawn rather than saving my bishop with Be2+. White then made another mistake here by playing Bxb4, allowing Black to win the rook on g2 with the bishop check tactic from earlier. But I missed it and played fxg2 and basically lost the game from there.</p>
        <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/08/21me.png?w=745"/><figcaption >Bxb4??, fxg2??</figcaption></figure>
        <p>After Rxg2, White has survived the attack and Black wished he never accidentally sacked his knight in the first place. What a terrible game, but Rf3 was a bold attempt for a human. (game can be found <a href="https://lichess.org/tKEq7uqw/white#30">here</a>)</p>
    </Wrapper>
  ),
  2: (
    <Wrapper>
      <p>It's Easter Sunday and first year of university feels pretty finished due to a global pandemic. My experience at Sheffield has been vastly different to what I thought it would be like and it definitely wasn't the easiest times but I've learnt a lot and wouldn't take back any experience really.</p>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191021_235240147_hdr-1.jpg"  /><figcaption >Mess of my room</figcaption></figure>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20190923_140235781.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191002_120635497-1.jpg" alt="" /></figure>
      </figure>
      <p>Free McFlurry at Freshers Fair (my camera went super HD for this shot for some reason) and finding some food near the Diamond with Junse which is sadly closed now. They gave out so much pizza at these fairs as well.</p>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/finn_bruh.png" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191103_005414648.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191102_180421108.jpg" alt="" /></figure>
      </figure>
      <p>HackSheffield, see my blog post <a href="https://keeponrunningjames.wordpress.com/2019/11/03/hack-sheffield-5-24-hours-of-web-development/">here</a>. Exclusive Finn bruh_face.png.</p>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20190923_092446406.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20190923_094021457.jpg" alt="" /></figure>
      </figure>
      <p>First Sheffield run, amazed by the huge trees in Porter Valley.</p>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191006_221832024.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191216_201542548.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/snapchat-1831123840.jpg" alt="" /></figure>
      </figure>
      <p>Flat call of duty and food! Been fun living with all of you lot.</p>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191023_231255028.jpg"  /></figure>
      <p>(apart from Marcin and his banana ice cream)</p>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191002_171218010-copy.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191002_175236450.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191027_150151640_burst000_cover_top-copy.jpg" alt="" /></figure>
      </figure>
      <p>I look forward to 2 more years of mud infested showers from more cross country and fell runs in the Peak District.</p>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/received_791234197963795.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191109_144346818_hdr.jpg" alt="" /></figure>
      </figure>
      <p>Oh how I miss my fresh creps.</p>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/lift.png" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191101_101917730.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191105_220240742.jpg" alt="" /></figure>
      </figure>
      <p>Three seemingly random pictures but actually significant (maybe not the first, that's just Robson staring at a lift). The second picture is when we had a door and it wasn't smashed, feels like ancient times. The last picture is Harold the Endcliffe cat who scared me one time standing outside the door, waiting for me to open the front door out.</p>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/snapchat-835898544.jpg"  /></figure>
      <p>Picture in Bierkeller with Alex and Robson, looking in even worse shape than after running Hampton Court Half Marathon (<a href="https://keeponrunningjames.wordpress.com/2018/03/19/hampton-court-half-marathon-18-03-18/#jp-carousel-125">link</a>).</p>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/received_453842115265611.jpg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/76756970_10215134694068011_2173026875071266816_n.png" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/received_606280930158746.jpeg" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20200201_133500397_hdr.jpg" alt="" /></figure>
      </figure>
      <p>South Yorkshire XC at Kiveton Park and BUCS XC at Edinburgh. Energy of BUCS was mental (<a href="https://youtu.be/Qz-ASLchXfo">Mens A race start</a>), never forget the old guy who tripped and landed on the mud trying to cross over the barrier to spectate the quicker runners.</p>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20200211_094736457.jpg"  /></figure>
      <p>Sheffield weather was a big yikes.</p>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20190928_085231537.jpg?w=1024" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191215_111917617.jpg?w=1024" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20191215_112501110.jpg?w=1024" alt="" /></figure>
      </figure>
      <p>Endcliffe Parkrun and the beautiful Rivelin Valley trail.</p>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/img_20200216_183611422.jpg?w=768" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/snapchat-2130413755.jpg?w=1024" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/snapchat-56475377.jpg?w=547" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/untitled.png?w=611" alt="" /></figure>
      </figure>
      <p>The last two weeks or so and a bit of Wii Sports on the top left.</p>
      <ul><li>Bottom Left: Robson harnessing energy from the gods at the Peak District.</li><li>Bottom Right: Sprout Pong (that was grim)</li><li>Top Right: A cursed image.</li></ul>
      <figure >
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/whatsapp-image-2020-04-12-at-10.48.26-1.jpeg?w=768" alt="" /></figure>
      <figure ><img src="https://keeponrunningjames.files.wordpress.com/2020/04/whatsapp-image-2020-04-12-at-10.48.26.jpeg?w=1024" alt="" /></figure>
      </figure><p>Moving back home, goodbye Yarncliffe F2!</p>
    </Wrapper>
  )
}
function getBlogContent(id){
  if(id in blogDict){
    return blogDict[id];
  }return null;

}

export default getBlogContent;
