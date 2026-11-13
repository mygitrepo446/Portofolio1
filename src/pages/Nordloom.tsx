import { useMemo, useState } from "react";
import { DemoChrome } from "../components/DemoChrome";
import { projects } from "../data/projects";

const project = projects.find((p) => p.slug === "nordloom")!;

type Product = {
  id: string;
  name: string;
  price: number;
  hue: string;
  tag: string;
};

const catalog: Product[] = [
  { id: "trail-shell", name: "Trail Shell Jacket", price: 188, hue: "#1f4d4a", tag: "Outerwear" },
  { id: "ridge-pack", name: "Ridge 32L Pack", price: 142, hue: "#2c3e50", tag: "Packs" },
  { id: "mist-fleece", name: "Mist Midlayer", price: 96, hue: "#4a6670", tag: "Layers" },
  { id: "cairn-boot", name: "Cairn Trail Boot", price: 210, hue: "#3d2f24", tag: "Footwear" },
  { id: "lumen-cap", name: "Lumen Soft Cap", price: 38, hue: "#0f766e", tag: "Accessories" },
  { id: "basalt-tee", name: "Basalt Merino Tee", price: 64, hue: "#243447", tag: "Layers" },
];

export function Nordloom() {
  const [activeId, setActiveId] = useState(catalog[0].id);
  const [cart, setCart] = useState<{ id: string; qty: number }[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const active = catalog.find((p) => p.id === activeId)!;
  const filters = ["All", "Outerwear", "Packs", "Layers", "Footwear", "Accessories"];
  const visible = filter === "All" ? catalog : catalog.filter((p) => p.tag === filter);
  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const cartTotal = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const product = catalog.find((p) => p.id === item.id);
        return sum + (product?.price ?? 0) * item.qty;
      }, 0),
    [cart],
  );

  function addToCart(id: string) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id, qty: 1 }];
    });
    setDrawerOpen(true);
  }

  return (
    <DemoChrome project={project}>
      <div className="shop">
        <header className="shop__nav">
          <strong className="shop__logo">Nordloom</strong>
          <nav>
            <button type="button" className={filter === "All" ? "is-on" : ""} onClick={() => setFilter("All")}>
              Shop
            </button>
            <span>Journal</span>
            <span>About</span>
          </nav>
          <button type="button" className="shop__cart-btn" onClick={() => setDrawerOpen(true)}>
            Cart ({cartCount})
          </button>
        </header>

        <div className="shop__hero-band">
          <div>
            <p className="shop__kicker">Fall trail edit · sample data</p>
            <h2>Gear for weather that changes mid-hike.</h2>
          </div>
          <div className="shop__filters">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={filter === f ? "is-on" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="shop__layout">
          <div className="shop__grid">
            {visible.map((product) => (
              <button
                key={product.id}
                type="button"
                className={`shop__card ${activeId === product.id ? "is-active" : ""}`}
                onClick={() => setActiveId(product.id)}
              >
                <div className="shop__swatch" style={{ background: product.hue }} />
                <div className="shop__card-meta">
                  <span>{product.tag}</span>
                  <strong>{product.name}</strong>
                  <em>${product.price}</em>
                </div>
              </button>
            ))}
          </div>

          <aside className="shop__pdp">
            <div className="shop__pdp-swatch" style={{ background: active.hue }} />
            <p className="shop__kicker">{active.tag}</p>
            <h3>{active.name}</h3>
            <p className="shop__price">${active.price}.00</p>
            <p className="shop__desc">
              Fictional product sample — weather-ready cut, quiet palette, built for clients to
              click through a Shopify-style flow.
            </p>
            <button type="button" className="shop__add" onClick={() => addToCart(active.id)}>
              Add to cart
            </button>
          </aside>
        </div>

        <div className={`shop__drawer ${drawerOpen ? "is-open" : ""}`}>
          <div className="shop__drawer-panel">
            <div className="shop__drawer-head">
              <strong>Cart</strong>
              <button type="button" onClick={() => setDrawerOpen(false)}>
                Close
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="shop__empty">Your cart is empty — add a sample item.</p>
            ) : (
              <ul className="shop__lines">
                {cart.map((item) => {
                  const product = catalog.find((p) => p.id === item.id)!;
                  return (
                    <li key={item.id}>
                      <span>
                        {product.name} × {item.qty}
                      </span>
                      <span>${product.price * item.qty}</span>
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="shop__drawer-foot">
              <span>Subtotal</span>
              <strong>${cartTotal}</strong>
            </div>
            <button type="button" className="shop__checkout" disabled={cart.length === 0}>
              Checkout (demo)
            </button>
          </div>
        </div>
      </div>
    </DemoChrome>
  );
}
