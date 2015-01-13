---
title: Aho Corasick
---

It is a multiple string match algorithm. `fgrep` is based on this.


Construct Trie
--------------

![image](https://farm8.staticflickr.com/7572/16085105388_86fedb2235_o.png)

dictionary: `{a,ab,bab,bc,bca,c,caa}`

### Node

The data structure has one node for every prefix of every string in the dictionary. So if (bca) is in the dictionary, then there will be nodes for (bca), (bc), (b), and ().

### Color

If a node is in the dictionary then it is blue node. Otherwise it is a grey node.

### blue arc

a blue directed "suffix" arc from each node to the node that is the longest possible strict suffix of it in the graph. For example, for node (caa), its strict suffixes are (aa) and (a) and (). The longest of these that exists in the graph is (a). So there is a blue arc from (caa) to (a).

### Green Arc

There is a green "dictionary suffix" arc from each node to the next node in the dictionary that can be reached by following blue arcs. For example, there is a green arc from (bca) to (a) because (a) is the first node in the dictionary (i.e. a blue node) that is reached when following the blue arcs to (ca) and then on to (a).

Match Process
-------------

At each step, the current node is extended by finding its child, and if that doesn't exist, finding its suffix's child, and if that doesn't work, finding its suffix's suffix's child, and so on, finally ending in the root node if nothing's seen before.
