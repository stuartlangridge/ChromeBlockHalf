An immensely noddy Chrome extension which blocks half
of all subrequests at random.

The idea here is to test whether a page is still usable
and still makes sense if it doesn't get its CSS or JS loaded.
So, with this extension installed, every time a page requests
some subresource, the machine flips a coin and if it comes
down tails, blocks that request.

Note that this means that refreshing a page likely will cause
it to fail to fetch a _different_ set of subresources, so you
can just hit refresh a few times to see differing effects.

Doesn't have any configuration or anything since it was built
as a little experiment by Stuart, and you'll need to install
it as an unpacked folder (or package it yourself if you like),
but the results are interesting.
