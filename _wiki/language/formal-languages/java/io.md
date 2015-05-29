---
title: Java IO
---

IO
=======

byte stream
-----------

* `InputStream`
* `OutputStream`

* `FileInputStream`
* `FileOutputStream`

```java
FileInputStream in = null;
FileOutputStream out = null;
in = new FileInputStream("xanadu.txt");
out = new FileOutputStream("outagain.txt");
int c;
// c is used for last 8 bits
while ((c = in.read()) != -1) {
  out.write(c);
}
```

character stream
----------------

`Reader`
`Writer`

`FileReader`
`FileWriter`

```java
FileReader inputStream = null;
FileWriter outputStream = null;
inputStream = new FileReader("xanadu.txt");
outputStream = new FileWriter("characteroutput.txt");

int c;
// use the last 16 bits of int
while ((c = inputStream.read()) != -1) {
  outputStream.write(c);
}
```

From ByteStream to CharStream:
`InputStreamReader`
`OutputStreamWriter`

line-oriented I/O
-----------------

* `BufferedReader`
* `PrintWriter`

```java
BufferedReader inputStream = null;
PrintWriter outputStream = null;
inputStream = new BufferedReader(new FileReader("xanadu.txt"));
outputStream = new PrintWriter(new FileWriter("characteroutput.txt"));

String l;
while ((l = inputStream.readLine()) != null) {
  outputStream.println(l);
}
```

Scanning
--------

`java.util.Scanner`

* `hasNext()`
* `next()`

```java
Scanner s = null;
s = new Scanner(new BufferedReader(new FileReader("xanadu.txt")));
while (s.hasNext()) {
  System.out.println(s.next());
}
```

Possible configuration

```java
s.useDelimiter(",\\s*");
```

It can read the format `12,000`, but need to set locale:

```java
s = new Scanner(new BufferedReader(new FileReader("usnumbers.txt")));
s.useLocale(Locale.US);

while (s.hasNext()) {
  if (s.hasNextDouble()) {
    sum += s.nextDouble();
  } else {
    s.next();
  }
}
```

I/O for command line
--------------------

`System.out` and `System.err` use PrintStream, which is byte stream.
But `PrintStream` emulate character stream, so no problem.

However, `System.in` is byte stream without character feature, so a little tricky:

```java
InputStreamReader cin = new InputStreamReader(System.in);
```

Data Stream
-----------

Classes:

* `DataInput`
* `DataOutput`

* `DataInputStream`
* `DataOutputStream`

Typical Methods:

* `writeDouble`
* `writeInt`
* `writeUTF`

* `readDouble`
* `readInt`
* `readUTF`

```java
static final String dataFile = "invoicedata";

static final double[] prices = { 19.99, 9.99, 15.99, 3.99, 4.99 };
static final int[] units = { 12, 8, 13, 29, 50 };
static final String[] descs = {
    "Java T-shirt",
    "Java Mug",
    "Duke Juggling Dolls",
    "Java Pin",
    "Java Key Chain"
};

out = new DataOutputStream(new BufferedOutputStream(
  new FileOutputStream(dataFile)));

for (int i = 0; i < prices.length; i ++) {
    out.writeDouble(prices[i]);
    out.writeInt(units[i]);
    out.writeUTF(descs[i]);
}
```

To input:

```java
in = new DataInputStream(new
  BufferedInputStream(new FileInputStream(dataFile)));

double price;
int unit;
String desc;
double total = 0.0;

try {
  while (true) {
    price = in.readDouble();
    unit = in.readInt();
    desc = in.readUTF();
    System.out.format("You ordered %d" + " units of %s at $%.2f%n",
      unit, desc, price);
    total += unit * price;
  }
} catch (EOFException e) {
}
```

All implementations of `DataInput` methods use `EOFException` instead of return values.

Object Stream
-------------

The object must implement Serializable.

* `ObjectInput`
* `ObjectOutput`

* `ObjectInputStream`
* `ObjectOutputStream`

```java
Object ob = new Object();
out.writeObject(ob);
out.writeObject(ob);

Object ob1 = in.readObject();
Object ob2 = in.readObject();
```
