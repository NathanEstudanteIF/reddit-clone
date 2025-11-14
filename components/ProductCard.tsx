import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  sales: number;
  discount?: string;
  badge?: string;
  freeShipping?: boolean;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />

        {product.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{product.discount}</Text>
          </View>
        )}

        {product.sales && (
          <View style={styles.salesBadge}>
            <Text style={styles.salesText}>▶ {product.sales}</Text>
          </View>
        )}
      </View>

      <View style={styles.productInfo}>
        {product.freeShipping && (
          <View style={styles.freeShippingBadge}>
            <Text style={styles.freeShippingText}>🇧🇷 FRETE GRÁTIS acima de R$10</Text>
          </View>
        )}
        {product.badge && (
          <View style={styles.indicadoBadge}>
            <Text style={styles.indicadoText}>{product.badge}</Text>
          </View>
        )}
        <Text style={styles.productTitle} numberOfLines={2}>{product.title}</Text>
        <View style={styles.productFooter}>
          <Text style={styles.productPrice}>R${product.price.toFixed(2)}</Text>
          <Text style={styles.productSales}>{product.sales} vendidos</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productImageContainer: {
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: 180,
  },
  discountBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#ffd700",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: "#ee4c2d",
    fontWeight: "bold",
    fontSize: 10,
  },
  salesBadge: {
    position: "absolute",
    bottom: 8,
    left: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  salesText: {
    color: "#fff",
    fontSize: 10,
  },
  productInfo: {
    padding: 12,
  },
  freeShippingBadge: {
    backgroundColor: "#e8f5e9",
    borderWidth: 1,
    borderColor: "#4caf50",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  freeShippingText: {
    color: "#2e7d32",
    fontSize: 9,
    fontWeight: "bold",
  },
  indicadoBadge: {
    backgroundColor: "#ee4c2d",
    alignSelf: "flex-start",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 8,
  },
  indicadoText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  productTitle: {
    fontSize: 12,
    color: "#333",
    lineHeight: 16,
    marginBottom: 8,
    height: 32,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    color: "#ee4c2d",
    fontWeight: "bold",
    fontSize: 16,
  },
  productSales: {
    color: "#999",
    fontSize: 10,
  },
});
