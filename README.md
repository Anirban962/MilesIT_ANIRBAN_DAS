**#The QA task wetransfer link:**

https://we.tl/t-mmD30fLGOc

**#.htaccess file must read:-**
https://www.cloudways.com/blog/wordpress-htaccess/

# .htaccessfile:: Limit logins and admin by IP
**.htaccessfile:: how to block all ip's and allow some specific one's code:-**

<Limit GET POST PUT>

    order deny,allow
    deny from all
    allow from xx.xx.xx.xx    # Allow specific IP address (e.g., Farhan's IP)

</Limit>
**# .htaccessfile:: Limit logins and admin by IP**

**The QA follow list:-**
1. prac woocommerce with payment & checkout.
2. blogs with pagination. (to-practice).
3. Formidable form (must check that).
4. Multi language site. (Loco-translate plugin used for multi language)

**Woocommerce hooks & ref list:-**
1. https://woocommerce.github.io/code-reference/hooks/hooks.html
2. https://cyberpanel.net/blog/woocommerce-hooks

   **content-product.php in woocommerce file code from chatgpt**
   <?php
/**
 * The Template for displaying product content within loops.
 * This will be overridden in the theme's WooCommerce folder.
 * 
 * @see  WooCommerce Templates
 * @package WooCommerce/Templates
 * @version 3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

global $product;
?>

<li <?php wc_product_class( '', $product ); ?>>
    <a href="<?php the_permalink(); ?>">
        <?php
            /**
             * woocommerce_before_shop_loop_item
             *
             * @hooked woocommerce_template_loop_product_link_open - 10
             * @hooked woocommerce_template_loop_product_thumbnail - 10
             * @hooked woocommerce_template_loop_product_link_close - 15
             */
            do_action( 'woocommerce_before_shop_loop_item' );
        ?>
        
        <h2 class="woocommerce-loop-product__title"><?php the_title(); ?></h2>
        
        <!-- Display the Product SKU -->
        <span class="product-sku"><?php echo 'SKU: ' . $product->get_sku(); ?></span>

        <!-- Display Custom Availability Status -->
        <span class="product-availability">
            <?php
            // For example, a custom field named 'availability_status'
            $availability = get_post_meta( $product->get_id(), '_availability_status', true );
            echo $availability ? $availability : 'In Stock';
            ?>
        </span>

        <?php
            /**
             * woocommerce_after_shop_loop_item_title
             *
             * @hooked woocommerce_template_loop_price - 10
             * @hooked woocommerce_template_loop_rating - 5
             */
            do_action( 'woocommerce_after_shop_loop_item_title' );
        ?>
    </a>
</li>

   **content-product.php in woocommerce file code from chatgpt**

   **conditional tags for woocommerce list:**
   https://developer.woocommerce.com/docs/conditional-tags-in-woocommerce/

   **Git details:-**
  1. https://git-scm.com/docs
  2. https://ndpsoftware.com/git-cheatsheet.html
     
****   Woocommerce code ref****
1. https://github.com/woocommerce/woocommerce/wiki/wc_get_products-and-WC_Product_Query
2. 



