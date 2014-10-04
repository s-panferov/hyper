(function() {var implementors = {};
implementors['hyper'] = ["<a class='stability Experimental' title='Experimental'></a>impl&lt;K, V, E, Elems: <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a href='http://doc.rust-lang.org/master/std/primitive.tuple.html'>(K, V)</a>&gt;, Edges: <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;E&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a class='enum' href='http://doc.rust-lang.org/master/collections/btree/node/enum.TraversalItem.html' title='collections::btree::node::TraversalItem'>TraversalItem</a>&lt;K, V, E&gt;&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/btree/node/struct.AbsTraversal.html' title='collections::btree::node::AbsTraversal'>AbsTraversal</a>&lt;Elems, Edges&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;K, V, E, T: <a class='trait' href='http://doc.rust-lang.org/master/collections/btree/map/trait.Traverse.html' title='collections::btree::map::Traverse'>Traverse</a>&lt;E&gt; + <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a class='enum' href='http://doc.rust-lang.org/master/collections/btree/node/enum.TraversalItem.html' title='collections::btree::node::TraversalItem'>TraversalItem</a>&lt;K, V, E&gt;&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a href='http://doc.rust-lang.org/master/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/btree/map/struct.AbsEntries.html' title='collections::btree::map::AbsEntries'>AbsEntries</a>&lt;T&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a href='http://doc.rust-lang.org/master/std/primitive.tuple.html'>(&amp;'a K, &amp;'a V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/btree/map/struct.Entries.html' title='collections::btree::map::Entries'>Entries</a>&lt;'a, K, V&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a href='http://doc.rust-lang.org/master/std/primitive.tuple.html'>(&amp;'a K, &amp;'a mut V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/btree/map/struct.MutEntries.html' title='collections::btree::map::MutEntries'>MutEntries</a>&lt;'a, K, V&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;K, V&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a href='http://doc.rust-lang.org/master/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/btree/map/struct.MoveEntries.html' title='collections::btree::map::MoveEntries'>MoveEntries</a>&lt;K, V&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a href='http://doc.rust-lang.org/master/std/primitive.bool.html'>bool</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/bitv/struct.Bits.html' title='collections::bitv::Bits'>Bits</a>&lt;'a&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a, A&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;&amp;'a A&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/dlist/struct.Items.html' title='collections::dlist::Items'>Items</a>&lt;'a, A&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a, A&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;&amp;'a mut A&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/dlist/struct.MutItems.html' title='collections::dlist::MutItems'>MutItems</a>&lt;'a, A&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/dlist/struct.MoveItems.html' title='collections::dlist::MoveItems'>MoveItems</a>&lt;A&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;&amp;'a T&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/ringbuf/struct.Items.html' title='collections::ringbuf::Items'>Items</a>&lt;'a, T&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;&amp;'a mut T&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/ringbuf/struct.MutItems.html' title='collections::ringbuf::MutItems'>MutItems</a>&lt;'a, T&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a href='http://doc.rust-lang.org/master/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/master/std/primitive.uint.html'>uint</a>, &amp;'a T)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/smallintmap/struct.Entries.html' title='collections::smallintmap::Entries'>Entries</a>&lt;'a, T&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;<a href='http://doc.rust-lang.org/master/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/master/std/primitive.uint.html'>uint</a>, &amp;'a mut T)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/smallintmap/struct.MutEntries.html' title='collections::smallintmap::MutEntries'>MutEntries</a>&lt;'a, T&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/master/collections/vec/struct.MoveItems.html' title='collections::vec::MoveItems'>MoveItems</a>&lt;T&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
