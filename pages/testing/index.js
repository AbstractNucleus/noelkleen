import { useState } from "react";
import TestModal from "../../components/Dicespace/TestModal"

export default function Testing() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl">Testing</h1>
      <a href="./gritcraft/gritcraft.jpg" download="SteamSetup.jpg">
            <div className="w-fit h-fit">
            DOWNLOAD
            </div>
      </a>
      <TestModal />
      <form action="/api/testing_forms" method="post">
        <input
          className="bg-zinc-300"
          type="text"
          id="first"
          name="first"
          required
        />
        <input
          className="bg-zinc-200"
          type="text"
          id="last"
          name="last"
          required
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => setCount(count + 2)}>{count}</button>
      <div className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis pellentesque id nibh. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Justo eget magna
          fermentum iaculis eu. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Diam sollicitudin tempor id eu nisl nunc. Massa
          tempor nec feugiat nisl pretium. Purus sit amet luctus venenatis
          lectus. Tortor dignissim convallis aenean et tortor at risus. Dolor
          sed viverra ipsum nunc aliquet bibendum enim.
        </p>
      </div>
    </>
  );
}
