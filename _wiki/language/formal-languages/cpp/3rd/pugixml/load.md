---
title: load
---

# parse result

```c++
struct xml_parse_result {
  xml_parse_status status;
  ptrdiff_t offset;
  xml_encoding encoding;

  operator bool() const;
  const char* description() const;
};
```

xml_parse_status

* status_ok
* status_file_not_found
* ...

# parse options
The usual bitwise arithmetics: `mask | flag` and `mask & ~flag`.

* parse_trim_pcdata: off. if the leading and trailing whitespace are to be removed.
* parse_ws_pcdata: off. if PCDATA nodes that consist only of whitespace are to be sustained.
* parse_minimal: all options turned off
* parse_default
* parse_full


# Load
## from file
API:

```c++
xml_parse_result xml_document::load_file(
  const char* path,
  unsigned int options = parse_default,
  xml_encoding encoding = encoding_auto
);
```

example

```c++
pugi::xml_document doc;
pugi::xml_parse_result result = doc.load_file("tree.xml");
```

## from memory
API:

```c++
// immutable buffer
xml_parse_result xml_document::load_buffer(
  const void* contents,
  size_t size,
  unsigned int options = parse_default,
  xml_encoding = encoding_auto
);
// equivalent with call load_buffer with size strlen(contents)
// null terminated string
xml_parse_result xml_document::load_string(
  const char_t* contents,
  unsigned int options = parse_default
);
```

examples:

```c++
const char source[] = "<hello>world</hello>";
size_t size = sizeof(source);
pugi::xml_parse_result result = doc.load_buffer(source, size);

pugi::xml_parse_result result = doc.load_string("<hello>world</hello>");
```

## from IO streams
API:

```c++
xml_parse_result xml_document::load(
  std::istream& stream,
  unsigned int options = parse_default,
  xml_encoding encoding = encoding_auto
);
```

example:

```c++
std::ifstream stream("a.xml");
pugi::xml_parse_result result = doc.load(stream);
```
