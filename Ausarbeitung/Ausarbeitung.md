---
title: "The Demoscene - Programming as an Artform"
author: Nico Jansen
lang: en-US
csquotes: true
date: \today
bibliography: ../../Hauptvortrag/hauptvortrag.bib # wird im auxil verzeichnis kompiliert
---

\IEEEPARstart{W}{ithin} hacker culture, the _demoscene_ is a subgroup,
dedicated to the artistic aspect of programming, primarily computer graphics.
Its main subject and namesake are the so-called _demos_ (short for _demonstrations_).
They are programs that use the computer system they run on in order to generate audiovisual effects in real-time [@demos-explained] [@real-time, p. 17].

# Demos

The term _Demo_ originally referred to software written in order to demonstrate the capabilities of a computer system as a form of advertisement.
In the context of the demoscene however, the thing that is demonstrated is no longer the system the demo runs on,
but the creative and technical skills of the demo's creators [@kunst-code-maschine, p. 13] [@real-time, p. 23].

Even though the effects of a demo are rendered in real-time on the hardware it was made for,
demos are, unlike video games, which share this property, not interactive [@kunst-code-maschine, p. 16].
The program plays a predetermined sequence of visuals,
often accompanied by music,
either until the sequence comes to its end, or indefinitely,
generating more content as it runs.
The fact that the output is rendered in real-time as its shown,
distinguishes the demo from other forms of linear,
non-interactive media, such as animated short films.
Calculating the visuals on the device was a necessity in the early days of the demoscene,
due to the limited memory capacity of the systems used at the time [@real-time, p. 17].
Storing a whole pre-rendered animation would have been impossible.

Demos are not a commercial product [@kunst-code-maschine, p. 13].
Their creators usually don't intend to monetize their work in any way.
Instead, most demos are, once they have been released,
available to download for free on internet platforms such as scene.org^[
See also \ref{demoscene-platforms} (p. \pageref{demoscene-platforms})
] [@scene-org].

# Demoscene Terminology

Demoscene members often refer to the demoscene as just _the scene_.
They call each other _sceners_ [@real-time].

Demos are, though the most prevalent, 
not the only kind of artwork created by sceners.
Collectively, all of those are called _productions_ [@real-time-gathering].
This is commonly shortened to _prods_^[That is the term they are listed under on the demoscene website Pouët [@pouet].].
_Intros_ are small (in terms of filesize) demos.
Other forms of productions mainly consist of one of the parts that make up a demo [@kunst-code-maschine, p. 17].
They include, but are not limited to (executable) music [@revision-music] and graphics [@revision-graphics] as well as animations [@revision-other].
Executable music means a program that generates the audio it outputs in real-time [@revision-music]. 
Executable graphics are programs that, unlike a demo, only generate a single still image [@revision-graphics].

Many productions, especially demos,
are not created by a single person, but by a group of sceners,
sometimes referred to as a _demo group_ [@demos-explained].
The sceners within a group are usually specialized in a certain creative field that goes into the creation of a demo.
There are, among others, _coders_, 
who write the code that is responsible for providing the framework for everything else contained in a demo, as well as rendering the visual effects.
_Graphic artists_ create the artworks that are displayed in a demo
and _musicians_ compose the music that accompanies the visuals [@demos-explained].

Many productions are shown for the first time as entries to a _compo_ (short for _competition_).
In a Compo, groups or individual sceners enter their productions to compete for the best entry.
Those are typically held at _demo parties_^[\textcite{demos-explained} defines a demo party as a less serious competition, 
however that does not appear to be how the two terms are used anymore.
Today _party_ refers to the events and _compos_ are the different competitions at those events.],
which are gatherings of the demoscene,
where its members meet to share ideas, 
enter the productions they brought into the compos 
or even spontaneously create prods for competitions announced at the event itself^[
At Revision, a demoparty held in Saarbrücken, Germany,
those are called _fast competitions_. [@revision-firsttime]]
[@real-time-gathering] [@revision-firsttime].

Compos are held in various categories, which are usually a type of production and optionally the platform it runs and a size restriction.
Some examples include "PC 4K Intro",
for Intros with a maximum file size of four kilobytes running on a PC
and "Oldschool Demo" for Demos running on an "oldschool" platform,
like the C64^[These examples appear on the entries for multiple parties on Demozoo [@demozoo-org].].
The exact categories and their rules vary between parties.

Besides these, many parties include a "Wild" competition for anything that does not fit into one of the categories.
This is where demos can be found, that run on unusual hardware like
a microcontroller [@lft-craft],
an FPGA [@lft-parallelogram],
the PC inside an ATM [@haujobb-payback],
an oscilloscope [@tvt-youscope],
the disk drive of a Commodore 64 (without the C64 attached) [@reflex-freespin],
and even a raytracer running inside a MySQL database management system [@holtsetio-mysql-raytracer].

# History

The demoscene originated from the cracker scene in northwestern europe around the middle of the 1980s
[@crackers-demosceners] [@illegal-guys, p. 259].

## The Cracker Scene

_Crackers_, in this case, are the people who remove the copy protection from software,
primarily video games, in order to be able to distribute it for free [@real-time, p. 12].
These cracked games, also called _warez_, were exchanged between friends and at schools on physical media [@illegal-guys, p. 260].

Game companies, interested in protecting their revenue,
developed increasingly more sophisticated methods of copy protection.
This soon turned into a challenge for crackers, and the games themselves stopped being the motivating factor.
Being the first one to crack a new protection scheme was a matter of prestige within the scene.
The practice being illegal did not work as a deterrent, but as an incentive to the crackers, 
who were almost exclusively adolescent males looking to prove themselves to their peers [@real-time, p. 12] [@illegal-guys, p. 261].

To let the players know that it had been them who cracked the game,
crackers started to incorporate their pseudonyms in the games. 
Commonly this was done by modifying the game's title screen;
Modifying the copyright notice on there was especially popular. 
Some crackers even modified the code of the actual game in order to replace the name of characters or other in-game texts
[@kunst-code-maschine, pp. 51-53].
Many crackers banded together into groups,
and over time the simple text changes evolved into more elaborate graphics,
including custom logos the groups designed.
These were called _crack screens_ [@illegal-guys, p. 262].

## Cracktros

Up until this point, the cracker scene was primarily an American phenomenon,
centered around cracking games released for the Apple II [@kunst-code-maschine, pp. 45-46].
This changed after the _Commodore 64_ was released in 1982 [@infoworld-c64].
With 22 Million units sold, it long held the place of the most successful home computer ^[
It has been surpassed by the Raspberry Pi, which sold 45 Million units as of 2022 [@rpi-anniversary].].
The success of the Commodore 64 led to the emergence of the european video game industry, 
and with that the rise of the european cracker scene [@kunst-code-maschine, pp. 50-51].

Software for the C64 came on floppy disks and magnetic tape (called "Datasette" by Commodore).
In order to execute the programs contained on them, those had to be loaded into the computer's memory.
A process, that, in the case of games on Datasette especially, took multiple minutes.
Games therefore began to include a small program that was placed at the start of the medium,
that displayed a loading screen, while the rest of the game continued to be loaded in the background
[@kunst-code-maschine, p. 55].

<!-- (A footnote about the datasette's transfer speed, if I find a source for it (to the paragraph above)) -->

These loading screens were replaced by custom-made loading programs.
Not being a part of the game itself, the loading programs allowed for much greater artistic freedom
than the crack screens that came before them.
Given the new possibilities, these loaders became more and more complex, 
until they evolved into _crack intros_ or _cracktros_
[@kunst-code-maschine, p. 56].

## Professionalization

Around 1986, some groups started selling cracked games. Some even started offering subscription services [@kunst-code-maschine, pp. 61-62].
This made it necessary for these groups to divide the work between their members,
so that every member could specialize in a certain task.
Besides the people who actually cracked the games, there were _swappers_, 
whose job it was to maintain contact to other groups in order to exchange with them as well as to distribute the games to the customers, 
either in person or by mailing floppies or cassettes.
The cracktros were no longer necessarily created by the person who cracked the game, 
but often by someone in the group who specialized in creating them or even multiple people,
which specialized in parts of the process like graphics or music
[@kunst-code-maschine, p. 62].

Cracktros did not only serve as a means to place the group's name on the release,
but as a form of advertisement for the group.
Aesthetically pleasing cracktros became a sign of quality and a necessity for groups wishing to sell their warez. [@kunst-code-maschine, pp. 62-63].
Some groups used the same intro across multiple games, as a form of branding [@kunst-code-maschine, p. 63],
not unlike the animated publisher and studio logos shown at the start of today's games.

Another function of cracktros was as a form of communication between scene members.
The intros included greetings to other groups and individuals,
as well as announcements of upcoming releases [@kunst-code-maschine, p. 63].

## The First Demos

Multiple kinds of productions that were similar to cracktros, but not attached to a game started appearing.
These included _Newsletters_, which served as a way to distribute news to other scene members [@kunst-code-maschine, p. 63],
and _music rips_, which combined visuals with a music track extracted from a game [@kunst-code-maschine, p. 70].
They were spread through the same distribution networks as the cracked games [@real-time, p. 17].
While those weren't called demos at the time, they were the first productions that would be considered demos today.

<!-- Compunet kunst-code-maschine 86, Demo-only Groups -->

_Copy parties_ were events, organized by a group, where scene members met to exchange warez and socialize.
Sceners brought their computers, and as the name suggests, 
exchanged copies of the software they and others brought with them. 
These parties included competitions for the best cracktros as well as live cracking contests [@illegal-guys, p. 272].
They were also the place where the first demo competitions were held [@kunst-code-maschine, pp. 88-89].

## Separation of the Demoscene

Especially in its early days, the demoscene and the cracker scene were heavily intertwined. 
Even though this connection never completely disappeared^[See also \ref{relation-to-the-cracker-scene} (p. \pageref{relation-to-the-cracker-scene})],
in the early 1990s, the demoscene started distancing itself from the cracker scene.
There were multiple factors that contributed to this development
[@crackers-demosceners].

Firstly, there was the issue of legality.
Beginning in the late 1980s, West German law enforcement started to take action against the cracker scene.
Copy parties and the homes of crackers were raided and cracked software and equipment seized.
At the same time, media began condemning software piracy, worsening the perception of playing cracked games.
Due to the threat of police raids, copy parties no longer provided a viable method for exchanging warez.
In response, the cracker scene moved to the internet.
Demosceners still needed a way to host their demo competitions, however,
and so they started to host their own demo parties to replace them [@illegal-guys, pp. 273-274].

Secondly, some sceners just found programming demos to be more interesting than cracking games.
Cracking games was seen as repetitive and the games themselves weren't perceived as being worth the effort [@crackers-demosceners].

Lastly, there was a generational shift.
The members of the original scene started to grow up and leave the scene.
Many of them moved into the IT and video game industries, 
where they were able to use the skills they had acquired in the scene.
New scene members took little interest in cracking games, and for some time,
"pure gaming" and games in general did not enjoy a high reputation in demoscene circles,
as they were trying to distinguish themselves from the cracker scene [@crackers-demosceners].

## The Commodore Amiga

Another factor that contributed to crackers leaving the scene was the release of the Commodore Amiga in 1985
[@kunst-code-maschine, p. 104].
Huge parts of the cracker and demoscene migrated to the Amiga,
but that meant that they had to get familiar with a whole new platform.
Many of the techniques they learned working with the C64 were not applicable to the Amiga
[@kunst-code-maschine, p. 113] [@crackers-demosceners].

Despite requiring learning to work with the new hardware, the Amiga, being significantly more capable than the C64,
was attractive to the demoscene.
It featured custom chips that gave it graphics and audio capabilities not available in any other home computer at the time
[@kunst-code-maschine, p. 106].

The animation chip called "Fat Agnus" contained, among other things, two coprocessors [@amiga-manual, pp. 1-5, A-17].
_Blitter_ allowed moving data in the display memory, without using up CPU resources.
This could be used to efficiently move objects around the screen [@kunst-code-maschine, p. 106].
_Copper_ could be used to modify the parameters of the graphics chips synchronized 
to the cathode ray drawing the image onto the screen. 
That allowed for things like changing the background color at a certain line,
that were much harder to achieve on the C64 [@kunst-code-maschine, p. 111].

Besides the graphics processors, the Amiga was equipped with an audio chip called "Paula" that allowed it to output stereo sound.
It had four voices, two per stereo channel, each being able to play back one sound at a time. 
In contrast to the Commodore 64, the Amiga was able to produce digitized sound,
meaning recorded audio, instead of just synthesized sounds produced by a chip in the device
[@amiga-manual, pp. 1-5, A-20].

## Tracker Music

In 1987, the "Ultimate Soundtracker" was released. 
It was a program for the Amiga that allowed the user to compose music by placing notes on a grid with four columns.
Each of these columns represented one of the four voices of the Amiga's audio chip and each line one sixteenth note, 
played from top to bottom  [@kunst-code-maschine, pp. 128-129].

Similar software had existed for the Commodore 64 [@real-time, p. 34],
but the Soundtracker used the Amiga's ability to play back digitized sound in order to use samples
recorded from real instruments instead of synthesized sounds [@kunst-code-maschine, p. 129].

It allowed defining patterns that could be used in different parts of the song,
similar to how functions are used in programming.
The whole interface with instructions processed from top to bottom,
branches, loops and patterns was similar in its usage to programming,
making it especially easy to adopt for demoscene members [@kunst-code-maschine, pp. 130].

There were several unofficial, enhanced versions of the Soundtracker created by demoscene members.
They added features like the _module_ (`.mod`) file format, allowing the song data and the samples used in that song to be saved
as a single file [@kunst-code-maschine, p. 130].
Other enhancements included the ability to use 31 instead of 15 instruments per song,
8 instead of 4 voices, but with reduced sound quality,
and decoupling the playback speed from the display's refresh rate [@kunst-code-maschine, pp. 130-131].

Songs created with it could easily be incorporated into demos,
making the Soundtracker a popular tool for composing demo music on the Amiga
[@kunst-code-maschine, p. 130].

_Tracked Music_ competitions are still held at demo parties today [@revision-music].

## PC

The early models of the IBM PC, first released in 1981, 
and compatible computers, were not particularly suited for video games or demos. 
They featured CGA graphics with a mere four colors, and all they had to offer in terms of audio was a buzzer^[
An internal speaker, capable of producing signal tones. Some modern PCs still include it.
] [@kunst-code-maschine, pp. 219-220].
Later models were more capable with the introduction of sound cards and EGA graphics, 
allowing for 16 out of 64 colors to be displayed at once [@kunst-code-maschine, p. 220].

This was still not competitive to what Commodore had to offer, 
but it was sufficient for video games to start appearing on the platform.
With the availability of video games, a PC cracker scene formed [@kunst-code-maschine, p. 220].

The first PC competition happened at the Assembly demo party in 1992 [@kunst-code-maschine, p. 226].
Its breakthrough had the PC scene, in 1993, 
when Future Crew released their demo "Second Reality" at that year's Assembly [@kunst-code-maschine, pp. 229-232].

Unlike the platforms that were popular in the demoscene before it,
the PC is not a uniform platform. 
PC Demos have to take into account that they might run on different hardware configurations.
They started disabling certain effects depending on the hardware to ensure the demo could run on PCs slower than the one
it was made for [@kunst-code-maschine, pp. 227].

<!-- 3D becomes popular -->

<!-- NFO files -->

# The Demoscene Today

Even today, the demoscene is largely a European phenomenon.
Most demo parties are held in northern Europe [@crackers-demosceners] [@demoparty-net].

While many sceners moved from the C64 to the Amiga and then to the PC, both platforms, 
as well as some retro systems not mentioned here, are still used to create demos today 
and competitions for them are still held at demo parties [@revision-oldskool] [@revision-amiga].

With the rise of modems, and then the internet, the demoscene's distribution channels moved from
swappers sending physical media through the mail to BBSs^[Bulletin Board Systems: 
An early precursor to forums that were accessed by dialing into them using a modem and their phone number] 
and then to their own internet platforms [@kunst-code-maschine, pp. 13, 133].

## Demoscene Platforms

Some important web platforms for the demoscene include _Pouët_, 
a database for groups and productions with the ability to comment and vote on them with an attached forum [@pouet], 
_Scene.org_, where a lot of the productions listed on Pouët are hosted [@scene-org] 
and _Demozoo_, a website that is similar to Pouët, but with a more modern design [@demozoo-org].

## Relation to the Cracker Scene

Some groups that are active in the demoscene today have not stopped being active in the cracker scene as well.
For example, the group "Razor 1911" [@razor1911-demozoo],
is still releasing warez as of January 2023 [@rzr-nfo].
How closely their activities in the two scenes are related, if at all, is unclear, 
due to the fact that the identity of the people active in their cracker branch is not public, to avoid prosecution.
However, Dubmood, a musician for Razor 1911, 
claims that his music was used in the installer for a game cracked by Razor 1911 in 2022^[
    A claim I can not verify for legal reasons
] [@dubmood-comply].

Nowadays, the demoscene acknowledges its roots in the cracker scene.
There are productions that are made in the style of cracktros [@crackers-demosceners] as a form of homage,
and Pouët lists cracktros as a type of production [@pouet].

# Impact

## On the Video Game Industry

Many sceners used the skills they learned in the demoscene to get a job in the video game industry [@crackers-demosceners].
Some of them even founded their own companies [@kunst-code-maschine, p. 13].
Among them are Remedy Entertainment [@remedy-futurecrew],
who were founded by members of Future Crew and created games like Max Payne and Control.
Another example is Digital Illusions, now known as DICE, creators of the "Battlefield" series, who were founded 
by members of the demo group The Silents [@dice-silents].

## On Computer Science

The impact of the demoscene on computer science is not well researched [@kunst-code-maschine, p. 21].
Few techniques seem to have originated in the demoscene, 
and those who were invented by sceners are often very specific to it.

For example, there are display hacks for the Commodore 64 like _ESCOS_, that allows for drawing beyond the
normally hard-coded borders of the screen [@kunst-code-maschine, p. 67] or _FLI_,
a graphics mode that allows for 16 colors per tile instead of 4 [@kunst-code-maschine, pp. 67, 97], 
enabling way more colorful graphics.

Other products of the demoscene are specialized tools for file compression that are optimized for small executables,
in order to fit more content into the size restrictions of competitions [@crinkler] [@kkrunchy].

The groups that develop custom graphics engines seem to keep those to themselves.
None of the engines that see widespread usage for coding demos today advertises it as a feature or acknowledges
the demoscene as an influence.
This makes it likely that they are tools developed outside the demoscene that are just suited for that use case as well.

One tool that has been created by a scener and finds usage outside the demoscene is _Shadertoy_ [@shadertoy].
It allows users to write and share shaders, instructions for the GPU on how to render an object, right in the browser.

# Conclusion

The demoscene embodies the part of the hacker ethic that one "can crate art and beauty on a computer" [@hackers].
Sceners create their productions not because they are useful or profitable, 
but for the sake of the creative process and as a form of artistic expression.
In recent years, the demoscene has begun to gain recognition beyond its own circles.
In Germany, the demoscene was even declared UNESCO Intangible Cultural Heritage in 2021 [@unesco].

\printbibliography
