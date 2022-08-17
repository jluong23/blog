import BlogImage from "../../../components/BlogImage";
const Content = (
    <div>
        <p>As a celebration of reaching 2000 rating in Rapid on <a href="http://lichess.org">lichess.org</a> (a brilliant open source website where you can learn and play chess) , I wanted to reflect on the famous 'Shower of Gold' game and a terrible game I played on lichess which reminded me of the tactical motif used by Marshall - except executed poorly by me. </p>
        <BlogImage blogId={1} imgName={"ratings-1.webp"} imgAlt={"Lichess Ratings"} imgCaption={"Sweet 2000 rating in Rapid."} maxWidth="240px"/>
        <p>Right before I played this game, I was collecting all of my uni stuff from the garage to prepare what I needed to bring back up to uni. I also found a dusty old chess book I was given when I was a kid called 'The Big Book of Chess' by Eric Schiller (2006).  The book goes over a broad range of topics about the game of chess; from showing how the pieces move and explaining common terms used by chess players to chess etiquette in tournaments and what players usually wear playing in them.  </p>
        <p>I probably didn't read it properly as a kid since I couldn't remember much about the content, but it was nice to see those famous games in the book that I later saw by other means as I've gotten older, like the Shower of Gold game or Bobby Fischer's queen sacrifice to windmill tactic. There was also a section on Chess Playing Software, where you could buy one for under $50 and would beat grandmasters regularly. These computers are much more publicly available nowadays, so it's crazy how much has changed since then.</p>
        <h3 >Frank Marshall's 'Shower of Gold' Game</h3>
        <p>This game was played by Frank Marshall and Stepan Levitky in 1912 and the 'Shower of Gold' name comes from the audience supposedly throwing gold coins on the board after Marshall played a spectacular move. There's reason to believe this didn't happen and chess players are pretty crazy but a brilliant move nonetheless. Definitely more beautiful than my game.</p>
        <BlogImage blogId={1} imgName={"23.png"} imgAlt={"Move 23"} imgCaption={"Marshall plays Qg3!! as Black."} />
        <p>After Qg3, the threat is Qxh2 with checkmate. So White must remove the black queen. However, neither the f or g pawn can take the queen as White will be checkmated soon after.</p>
        <p>If White plays fxg3, Ne2 pushes the king into the corner, then the ice skater Rxf1 is a back rank checkmate.</p>
        <p>If White plays hxg3, Ne2 is mate in one!</p>
        <p>Therefore, White must take with the queen, but Ne2 also follows with a juicy fork hitting the queen and king.</p>
        <BlogImage blogId={1} imgName={"24-1.webp"} imgAlt={"Move 24-1"} imgCaption={"Qxg3, Ne2+."} />
        <p>After Kh1 escaping the check, Black grabs the queen with Nxg3+ and White is unable to take the knight. fxg3 does not work for the same reason as before, and hxg3 is illegal as the h pawn is pinned by Black's rook.</p>
        <BlogImage blogId={1} imgName={"25.webp"} imgAlt={"Move 25"} imgCaption={"Kh1, Nxg3."} />
        <p>After Kg1 which is forced, Black has at least a draw with Ne2+ and Ng3+ perpetual check or can retreat the rook being up a knight after Ne2+, Kg1, Rh6. White resigned in this position.</p>
        <h2 >James Luong's 'Shower of Blunders'</h2>
        <p>In this game, I was playing the black pieces at rating 1929 against Lichess user klimo rated 1904. Taking a look at a few moments before my 'golden move', My first blunder occurs by castling king side, losing a minor piece white just took. I thought I was threatening checkmate with Qxf2 but was blind and forgot about the white queen on c2 defending the f2 square.</p>
        <BlogImage blogId={1} imgName={"16me-1.webp"} imgAlt={"Move 16-1"} imgCaption={"Nxc6, O-O??"} />
        <p>The White knight moves back to e5. The best move was to take my strong dark squared bishop on b4, as the attack comes quickly with Bxa4!. </p>
        <BlogImage blogId={1} imgName={"17me.webp"} imgAlt={"Move 17"} imgCaption={"Ne5, Bxa4!"} />
        <p>White's queen is unable to capture the bishop because of the mate threat on the f2 square. Now, my mistake castling kingside and sacrificing my knight seems more powerful than it should. After a few repetitions with Black's bishop bullying White's overloaded queen, Black's bishop ends up on d1, and White's queen is in the corner on a2.</p>
        <BlogImage blogId={1} imgName={"18me.webp"} imgAlt={"Move 18"} imgCaption={"Qe2 (defending the f2 square), Bd1, Qa2."} />
        <p>In this position, My 'golden' move comes with Rf3. My idea was to stack the rooks while trying to bait White to move the g pawn away which will lead to checkmate.</p>
        <p>If gxf3, Qh3 check. Kg1 is forced and Bxf3 is forced mate with Qxg2 after White's move.</p>
        <p>If g3, Qh3 check, Kg1 is forced again and Black stacks the rooks with Raf8; White's kingside has collapsed.</p>
        <p>Therefore, the knight has to take the rook. However, Rf3 makes no threats in the first place, so the engine says my 'golden' move is a blunder and plays h3 to stop and Qh3 possibilities. </p>
        <BlogImage blogId={1} imgName={"19me.webp"} imgAlt={"Move 19"} imgCaption={"Nxf3, exf3."} />
        <p>After knight takes and pawn takes, White knows g3 or gxf3 is losing because of the same reasons so plays Rg1? instead, hanging the pawn on h2 to the queen. The threat included after Qxh2 from black is Be2 check and winning the rook with Qxg1. I played Rf8 instead, bringing more pieces into the attack. White then plays Bd2 with a discovered attack on my light squared bishop from White's rook on a1.</p>
        <BlogImage blogId={1} imgName={"20me.webp"} imgAlt={"Move 20"} imgCaption={"Rg1?, Rf8, Bd2."} />
        <p>I was playing incredibly slow this game and ran into time trouble, playing Qxh2 grabbing the pawn rather than saving my bishop with Be2+. White then made another mistake here by playing Bxb4, allowing Black to win the rook on g2 with the bishop check tactic from earlier. But I missed it and played fxg2 and basically lost the game from there.</p>
        <BlogImage blogId={1} imgName={"21me.webp"} imgAlt={"Move 21"} imgCaption={"Bxb4??, fxg2??"} />
        <p>After Rxg2, White has survived the attack and Black wished he never accidentally sacked his knight in the first place. What a terrible game, but Rf3 was a bold attempt for a human. (game can be found <a href="https://lichess.org/tKEq7uqw/white#30">here</a>)</p>
    </div>
)
  
export default Content;
