def is_trees_synchronized(tree1, tree2):
    def are_mirrored(node1, node2):
        return (node1 == node2) or (
            node1 and node2 and node1.value == node2.value and
            are_mirrored(node1.left, node2.right) and
            are_mirrored(node1.right, node2.left)
        )

    synchronized = are_mirrored(tree1, tree2)
    return [synchronized, tree1.value]
