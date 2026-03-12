
export default function Footer() {
    return (
        <footer className="bg-(--color-amber-900) text-white py-12 px-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-bold mb-4">Le Bouledogue</h4>
            <p className="text-sm text-gray-300">
              Your trusted online bakery for every celebration.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Know Us</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Subscribe</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="px-4 py-2 rounded-l-full text-black w-full"
              />
              <button className="bg-white text-(--color-lebron-600) px-4 rounded-r-full font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-sm text-gray-400">
          © 2026 Le Bouledogue - All rights reserved
        </p>
      </footer>
    )
}