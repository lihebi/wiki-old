---
title: c-regex
---

Only supported by C++11

# constructor

```c++
explicit basic_regex(const CharT* s);
basic_regex(const basic_regex& other);
```

# std::match_results
std::match_results

```c++
template<
class BidirIt,
class Alloc = std::allocator<std::sub_match<BidirIt>>
> class match_results;
```

| type    | definition                                  |
|:--------|:--------------------------------------------|
| cmatch  | match_results<const char*>                  |
| wcmatch | match_results<const wchar_t*>               |
| smatch  | match_results<std::string::const_iterator>  |
| wsmatch | match_results<std::wstring::const_iterator> |

## member functions
* empty
* size
* operator[]

`std::match_results` holds `std::sub_match`es,
each of which is a pair of iterators into the original character sequence that was matched,
it's undefined behavior to examine std::match_results
if the original character sequence was destroyed
or iterators to it were invalidated for other reasons.

## std::sub_match
std::sub_match inherits from std::pair

| type        | definition                              |
|:------------|:----------------------------------------|
| csub_match  | sub_match<const char*>                  |
| wcsub_match | sub_match<const wchar_t*>               |
| ssub_match  | sub_match<std::string::const_iterator>  |
| wssub_match | sub_match<std::wstring::const_iterator> |



# regex_search

API

```c++
bool regex_search
(
  const std::basic_string<CharT,STraits,SAlloc>& s,
  const std::basic_regex<CharT,Traits>& e
);
bool regex_search
(
  const std::basic_string<CharT,STraits,SAlloc>&&,
  std::match_results&,
  const std::basic_regex<CharT, Traits>&
);
```

```c++
#include <iostream>
#include <string>
#include <regex>

int main() {
  std::string line = "xxx";
  std::regex color_regex("([a-f0-9]{2})");
  std::regex_search(line, color_regex);

  std::smatch color_match;
  std::regex_search(line, color_match, color_regex);
  for (int i=0;i<color_match.size();i++) {
    // the first is entire match
    // the followings are () matches
    color_match[i]; // string
  }
}
```

# std::regex_match

```c++
std::regex_match(fname, base_match, base_regex);
// The first sub_match is the whole string; the next
// sub_match is the first parenthesized expression.
if (std::regex_match(fname, pieces_match, pieces_regex)) {
  std::cout << fname << '\n';
  for (size_t i = 0; i < pieces_match.size(); ++i) {
    std::ssub_match sub_match = pieces_match[i];
    std::string piece = sub_match.str();
    // can also piece = sub_match, implicit convertion
  }   
}  
```

# std::regex_replace

API

```c++
std::basic_string<CharT,STraits,SAlloc>
regex_replace(
  const std::basic_string<CharT,STraits,SAlloc>& s,
  const std::basic_regex<CharT,Traits>& re,
  const CharT* fmt
);
std::basic_string<CharT>
regex_replace(
  const CharT* s,
  const std::basic_regex<CharT,Traits>& re,
  const std::basic_string<CharT,STraits,SAlloc>& fmt
);
std::basic_string<CharT>
regex_replace(
  const CharT* s,
  const std::basic_regex<CharT,Traits>& re,
  const CharT* fmt
);
```

```c++
std::regex_replace(s, reg, "");
```
